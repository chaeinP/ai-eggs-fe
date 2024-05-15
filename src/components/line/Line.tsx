export default function Line({ height, color = "#E7EAEE" }: { height: string; color?: string }) {
  return <div style={{ height, backgroundColor: color }}></div>;
}
