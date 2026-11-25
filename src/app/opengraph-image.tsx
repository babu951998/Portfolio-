import { ImageResponse } from "next/og";

export const alt = "Babu P — Full Stack Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#F7F5F0",
        color: "#161614",
        padding: "64px 72px",
        border: "1px solid #DDD8CE",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #DDD8CE",
          paddingBottom: "24px",
          fontSize: 20,
          color: "#A63E1E",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
        <span>Babu P · Full Stack Developer</span>
        <span>Tamil Nadu, India</span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div
          style={{
            fontSize: 58,
            lineHeight: 1.1,
            fontWeight: 500,
            letterSpacing: "-0.02em",
            maxWidth: "960px",
          }}
        >
          Real-time IoT platforms, MQTT telemetry pipelines &amp; full-stack web
          systems.
        </div>
        <div style={{ fontSize: 26, color: "#57554E", maxWidth: "880px" }}>
          5,000+ connected devices · 100+ sites · Node.js, React, Angular,
          Python, CodeIgniter 4, MongoDB
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          borderTop: "1px solid #DDD8CE",
          paddingTop: "24px",
          fontSize: 20,
          color: "#5C5951",
        }}
      >
        <span>arivubabu98@gmail.com</span>
        <span>linkedin.com/in/babu9598</span>
      </div>
    </div>,
    size
  );
}
