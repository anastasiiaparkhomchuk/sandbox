// Map test cases into readable report lines
 
const testCases = [
  { id: "TC-101", title: "User can log in", priority: "high" },
  { id: "TC-102", title: "User can reset password", priority: "medium" },
  { id: "TC-103", title: "User can log out", priority: "low" }
];

 
const readableReportLines = testCases.map(tc => `[${tc.id}] ${tc.title} - Priority: ${tc.priority.toUpperCase()}`)
console.log(readableReportLines)