  // Filter failed test results by result
const testResults = [
  { name: "Login works", status: "passed" },
  { name: "Invalid password message", status: "failed" },
  { name: "Logout works", status: "passed" }
];
const failesTestResults = testResults.filter(test => test.status === 'failed');
 console.log(failesTestResults)