import { TranslateSwitchStyle } from "./style";

type GreetProps = {
  onClickTranslate: () => void;
};

export default function TranslateSwitch(props: GreetProps) {
  return (
    <TranslateSwitchStyle>
      <button onClick={props.onClickTranslate}>
        <input type="checkbox" />
      </button>
      <p>en / pt</p>
    </TranslateSwitchStyle>
  );
}
