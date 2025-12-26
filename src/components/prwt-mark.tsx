export function PrwtMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 256 128"
      {...props}
    >
      <path
        fill="currentColor"
        d="M40.75 123H17V4.25H88.25V28H40.75V51.75H88.25V75.5H40.75V123ZM88.25 51.75V28H112V51.75H88.25ZM161.5 123H137.75V4.25H209V28H161.5V51.75H209V75.5H161.5V123ZM232.75 51.75H209V28H232.75V51.75ZM232.75 123H209V75.5H232.75V123Z"
      />
    </svg>
  );
}

export function getMarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 256 128"><path fill="${color}" d="M40.75 123H17V4.25H88.25V28H40.75V51.75H88.25V75.5H40.75V123ZM88.25 51.75V28H112V51.75H88.25ZM161.5 123H137.75V4.25H209V28H161.5V51.75H209V75.5H161.5V123ZM232.75 51.75H209V28H232.75V51.75ZM232.75 123H209V75.5H232.75V123Z"/></svg>`;
}
