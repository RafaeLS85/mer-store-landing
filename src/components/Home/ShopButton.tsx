interface Props {
  title: string;
  url?: string;
}

export default function ShopButton({ title, url = "/" }: Props) {
  return (
    <div className="flex justify-center m-14">
      <button
        style={{
          fontFamily: "Europa",
          fontSize: "20px",
          backgroundColor: "#553605",
          fontWeight: "bold",
          color: "white",
          padding: "1em 1.67em",
          borderRadius: "30px",
        }}
      >
        {title}
      </button>
    </div>
  );
}
