import { PROFILE } from "../data/content";

const PhotoPlaceholder = ({ imageUrl }) => {
  const hasImage = imageUrl && imageUrl.trim() !== "";
  
  return (
    <div style={{
      width: "100%",
      paddingBottom: "130%",
      background: "var(--surface)",
      border: "1px solid var(--border)",
      position: "relative",
      marginBottom: "32px",
      overflow: "hidden",
    }}>
      {hasImage ? (
        <img 
          src={imageUrl} 
          alt={PROFILE.name}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      ) : (
        <>
          {/* Placeholder content */}
          <div style={{
            position: "absolute", inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
          }}>
            {/* Monogram */}
            <div style={{
              width: "80px", height: "80px",
              border: "1px solid rgba(184,149,42,0.3)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <span style={{
                fontFamily: "var(--serif)",
                fontSize: "2.5rem",
                fontWeight: 300,
                color: "rgba(184,149,42,0.4)",
              }}>{PROFILE.monogram}</span>
            </div>
            <div style={{
              fontFamily: "var(--mono)",
              fontSize: "9px",
              letterSpacing: "0.25em",
              color: "var(--muted)",
              textTransform: "uppercase",
              textAlign: "center",
              lineHeight: 2,
            }}>
              Professional<br />Portrait<br />Placeholder
            </div>
          </div>
        </>
      )}

      {/* Corner accents */}
      {[["top","left"],["top","right"],["bottom","left"],["bottom","right"]].map(([pos1,pos2],i) => {
        const styles = { position:"absolute", width:"20px", height:"20px" };
        if (pos1==="top") styles.top = 0; else styles.bottom = 0;
        if (pos2==="left") { 
          styles.left = 0; 
          styles.borderLeft = "1px solid rgba(184,149,42,0.4)"; 
          styles.borderTop = pos1==="top" ? "1px solid rgba(184,149,42,0.4)" : undefined; 
          styles.borderBottom = pos1==="bottom" ? "1px solid rgba(184,149,42,0.4)" : undefined; 
        } else { 
          styles.right = 0; 
          styles.borderRight = "1px solid rgba(184,149,42,0.4)"; 
          styles.borderTop = pos1==="top" ? "1px solid rgba(184,149,42,0.4)" : undefined; 
          styles.borderBottom = pos1==="bottom" ? "1px solid rgba(184,149,42,0.4)" : undefined; 
        }
        return <div key={i} style={styles} />;
      })}
    </div>
  );
};

export default PhotoPlaceholder;
