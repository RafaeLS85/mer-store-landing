interface Props {
  url: string;
  title: string;
  subtitle?: string;
}

export default function HeaderSection({ url, title, subtitle }: Props) {
  const styles = {
    background: {
      backgroundImage: `url('${url}')`,
      height: "100vh",
      backgroundSize: "cover",
    },
    title: {
      fontFamily: "Grandma",
      fontSize: "60px",
      margin: "auto 2rem",
      textAlign: "center",
      fontWeight: "bold",
      whiteSpace: "pre-wrap",
      textTransform: "uppercase",
    },
    subtitle: {
      fontFamily: "Europa",
      fontSize: "21px",
      padding: "2rem",
      textAlign: "center",
      fontWeight: "bold",
      whiteSpace: "pre-wrap",
      textTransform: "uppercase",
    },
  };

  return (
    <div
      className="flex flex-col justify-center"
      style={Object.assign(styles.background)}
    >
      <div className="text-center self-center">
        <h1 style={Object.assign(styles.title)}>{title}</h1>
      </div>
      {subtitle && (
        <p style={Object.assign(styles.subtitle)}>
          <strong>{subtitle}</strong>
        </p>
      )}
    </div>
  );
}
