import styles from "./QuantitySelector.module.css";

type QuantitySelectorProps = {
  productId: number;
  defaultValue?: number;
  setQuantity: (quantity: number) => void;
};

export default function QuantitySelector(props: QuantitySelectorProps) {
  /**
   * Handles the click event of the plus button: increases the quantity by one.
   * @param event The click event of the plus button
   */
  function increase(event: React.MouseEvent<HTMLButtonElement>) {
    changeQuantity(event, "increase");
  }

  /**
   * Handles the click event of the minus button: decreases the quantity by one.
   * @param event The click event of the minus button
   */
  function decrease(event: React.MouseEvent<HTMLButtonElement>) {
    changeQuantity(event, "decrease");
  }

  /**
   * Common handler for the click event of the plus & minus button.
   * Updates the value of the quantity input and triggers its change event.
   * @param event The click event of the plus/minus button
   * @param type "increase" when plus button was clicked, "decrease" when minus button was clicked
   */
  function changeQuantity(
    event: React.MouseEvent<HTMLButtonElement>,
    type: "increase" | "decrease"
  ) {
    const inputElement =
      event.currentTarget.parentElement?.querySelector("input");
    if (!inputElement) return;
    if (type === "increase") inputElement.stepUp();
    if (type === "decrease") inputElement.stepDown();
    inputElement.dispatchEvent(new Event("change", { bubbles: true }));
  }

  /**
   * Handles the input change of the quantity number input.
   * Makes sure the value stays positive, and updates the new value in the component state.
   * @param event Change event of the quantity number input
   */
  function inputChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    // Make sure the quantity is at least 1
    const quantity = Math.max(1, Number(event.currentTarget.value));
    props.setQuantity(quantity);
  }

  return (
    <div className={styles["quantity-selector"]}>
      <button
        className={styles["quantity-selector__button"]}
        onClick={decrease}
      >
        -
      </button>
      <input
        name={`product-quantity-${props.productId}`}
        className={styles["quantity-selector__input"]}
        type="number"
        step="1"
        min="1"
        max="100"
        defaultValue={props.defaultValue || 1}
        onChange={inputChangeHandler}
      />
      <button
        className={styles["quantity-selector__button"]}
        onClick={increase}
      >
        +
      </button>
    </div>
  );
}
