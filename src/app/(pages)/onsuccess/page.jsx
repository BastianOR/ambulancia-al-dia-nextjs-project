import Link from "next/link";

export default function OnSuccessPage() {
  return (
    <div className="OnSuccessPage">
      <h2>Datos ingresados correctamente!</h2>
      <Link href={"/agenda"}><button>Volver a la agenda</button></Link>
    </div>
  );
}
