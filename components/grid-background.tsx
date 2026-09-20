

export default function GridBackground() {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(to right, #3d7dff 2px, transparent 1px), linear-gradient(to bottom, #3d7dff 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>
    )
  }
  