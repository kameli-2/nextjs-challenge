import styles from "./Button.module.css";
import { formatAmount } from "@/lib/cart";

type ButtonProps = {
  text: string;
  amount: number;
  clickHandler: () => void;
};

export default function Button(props: ButtonProps) {
  return (
    <button className={styles["btn-primary"]} onClick={props.clickHandler}>
      {props.text} {formatAmount(props.amount)}
    </button>
  );
}
