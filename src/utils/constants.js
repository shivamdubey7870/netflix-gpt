export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMzA4ODI5YWYzNjRlNDc2MGNlNTA0YWQ0NTQyNTk2NCIsIm5iZiI6MTc2NjAzNzEwMC41OTM5OTk5LCJzdWIiOiI2OTQzOTY2YzFhY2MzMTc5ZWJlNmU3OWEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.gLhmqL_4ckA7tWMS_R6So4-G-bGJNSRNe042DwqlTOg"
  }
};
export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY || '';