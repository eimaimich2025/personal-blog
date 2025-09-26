#!/usr/bin/env node

// Test script to debug production API
const https = require('https');

const testData = {
  title: 'I love yebob',
  date: '2024-12-12',
  excerpt: 'Debug test excerpt',
  content: 'Debug test content'
};

const postData = JSON.stringify(testData);

const options = {
  hostname: 'personal-blog-ovzz70hzt-allovance1.vercel.app',
  port: 443,
  path: '/api/posts/i-love-yebob',
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(postData)
  }
};

console.log('🧪 Testing Production API Debug...');
console.log('📤 Sending data:', testData);

const req = https.request(options, (res) => {
  console.log(`📊 Status Code: ${res.statusCode}`);
  console.log(`📋 Status Message: ${res.statusMessage}`);
  console.log(`📄 Headers:`, res.headers);

  let responseData = '';

  res.on('data', (chunk) => {
    responseData += chunk;
  });

  res.on('end', () => {
    console.log('📥 Raw Response:', responseData);
    
    try {
      const parsed = JSON.parse(responseData);
      console.log('✅ Parsed Response:', parsed);
    } catch (error) {
      console.log('❌ JSON Parse Error:', error.message);
    }
  });
});

req.on('error', (error) => {
  console.log('❌ Request Error:', error.message);
});

req.write(postData);
req.end();

