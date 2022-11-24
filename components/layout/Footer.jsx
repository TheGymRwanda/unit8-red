import Anchor from "../ui/Anchor";
export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row  md:justify-between  mb-12 ">
      <p>
        Ape Unit GmbH <br />
        Waldemarstraße 38,
        <br /> 10999 Berlin
      </p>
      <div className="flex flex-col gap-4 pt-12 md:pt-0">
        <Anchor href="https://twitter.com/apeunit">Twitter</Anchor>
        <Anchor href="https://www.facebook.com/apeunit/">Facebook</Anchor>
        <Anchor href="https://de.linkedin.com/company/ape-unit">
          Linkedln
        </Anchor>
      </div>
      <p className="pt-10 md:pt-0">Impressum / Privacy</p>
    </footer>
  );
}
