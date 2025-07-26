// Netlify function for Reddit trending content
const fetch = require('node-fetch');

exports.handler = async (event) => {
  // Enable CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  const subreddit = event.queryStringParameters?.subreddit || 'trending';
  const limit = event.queryStringParameters?.limit || '25';
  const after = event.queryStringParameters?.after || '';

  // Reddit API URL for trending content
  let url = `https://www.reddit.com/r/${subreddit}/hot.json?limit=${limit}`;
  if (after) {
    url += `&after=${after}`;
  }

  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'SocialSpy/1.0 (Trending Content Aggregator)'
      }
    });

    if (!response.ok) {
      throw new Error(`Reddit API returned ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();

    // Transform Reddit data to match our format
    const transformedData = {
      items: (data.data?.children || []).map((child, index) => {
        const post = child.data;
        return {
          id: post.id,
          platform: 'reddit',
          title: post.title || 'Untitled',
          creator: post.author || 'Unknown',
          subreddit: post.subreddit_name_prefixed,
          views: post.score ? `${post.score} upvotes` : 'N/A',
          thumbnail: post.thumbnail && post.thumbnail.startsWith('http') ? post.thumbnail : 'icon-comment',
          trending: true,
          url: `https://reddit.com${post.permalink}`,
          created: post.created_utc,
          category: post.subreddit || 'general',
          statistics: {
            upvotes: post.ups || 0,
            comments: post.num_comments || 0,
            ratio: post.upvote_ratio || 0
          }
        };
      }),
      nextPageToken: data.data?.after || null,
      pageInfo: {
        totalResults: data.data?.dist || 0
      }
    };

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(transformedData)
    };
  } catch (err) {
    console.error('Reddit API fetch error:', err);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: err.message,
        items: [],
        nextPageToken: null
      })
    };
  }
};