const events = [
  { timestamp: "2025-10-22T10:01:00Z", type: "click" },
  { timestamp: "2025-10-22T10:05:00Z", type: "scroll" },
  { timestamp: "2025-10-22T10:14:00Z", type: "click" },
  { timestamp: "2025-10-22T10:31:00Z", type: "click" },
  { timestamp: "2025-10-22T10:45:00Z", type: "scroll" },
  { timestamp: "2025-10-22T11:02:00Z", type: "click" },
];
const INTERVAL=30*60*1000;
const getTimeBinning=(timestamp)=>{
const date=new Date(timestamp);
const floordata=Math.floor(date.getTime()/INTERVAL)*INTERVAL;
console.log(floordata);
}
getTimeBinning("2025-10-22T10:05:00Z");