interface Props {
  title: string;
}

export default function HeaderTitle({ title }: Props) {
  const styles = {
    title: {
      fontFamily: "Grandma",
      fontSize: "54px",
      textAlign: "center",
      fontWeight: "bold",
      color: "#553605",
      whiteSpace: "pre-wrap",
      textTransform: "uppercase",
    },
  };

  return (
    <div className="m-14">
      <h2 style={Object.assign(styles.title)}>{title}</h2>
    </div>
  );
}
