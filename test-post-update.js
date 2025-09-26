#!/usr/bin/env node

// Test script to verify post update functionality
const http = require('http');

const testData = {
  title: 'I love yebob',
  date: '2024-12-12',
  excerpt: 'Test excerpt from script',
  content: 'This is a test update from the script'
};

const postData = JSON.stringify(testData);

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/api/posts/i-love-yebob',
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(postData)
  }
};

console.log('🧪 Testing Post Update API...');
console.log('📤 Sending data:', testData);

const req = http.request(options, (res) => {
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
      
      if (res.statusCode === 200 && parsed.success) {
        console.log('🎉 SUCCESS: Post update worked correctly!');
        console.log('✅ The API is functioning properly');
      } else {
        console.log('❌ FAILURE: Post update failed');
        console.log('❌ Status:', res.statusCode, 'Success:', parsed.success);
      }
    } catch (error) {
      console.log('❌ JSON Parse Error:', error.message);
      console.log('❌ Response was not valid JSON');
    }
  });
});

req.on('error', (error) => {
  console.log('❌ Request Error:', error.message);
  console.log('❌ Make sure the server is running on localhost:3000');
});

req.write(postData);
req.end();

