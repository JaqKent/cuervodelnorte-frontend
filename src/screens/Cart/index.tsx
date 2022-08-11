import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import FormInput from "components/FormInput";
import NoItem from "./components/NoItem";
import PurchaseList from "./components/PurchaseList";
import { CartContext } from "context/Cart";
import { Info } from "interface/Purchase";
import { INPUTS } from "./constants";
import styles from "./styles.module.scss";

function Cart() {
  const { productList, checkout } = useContext(CartContext);
  const { handleSubmit, control } = useForm<Info>();
  const requiredItem = <p className={styles.required}>*</p>;
  const onSubmit: SubmitHandler<Info> = (info) => {
    checkout(info);
  };
  const navigate = useNavigate();
  const handleGratitud = () => {
    navigate(`/GratitudScreen`);
  };

  const NUMBER_VALIDATION = { min: 999999999, max: 9999999999999 };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.container}>
        <main className={styles.mainContainer}>
          <h1 className={styles.title}>info. del Cliente</h1>
          <p className={styles.subTitle}>
            Déjanos tu info y nos contactaremos con vos para concretar tu compra
          </p>
          <div className={styles.form}>
            {INPUTS.map((input) => (
              <>
                <Controller
                  key={input.id}
                  defaultValue=""
                  control={control}
                  name={input.name}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <>
                      <FormInput
                        {...field}
                        {...(input.name === "whatsApp"
                          ? NUMBER_VALIDATION
                          : undefined)}
                        name={input.name}
                        inputType={input.type}
                        label={`${input.name}:`}
                        placeholder={input.placeholder}
                        labelClassName={styles.formLabel}
                        inputClassName={styles.formInput}
                        required
                      />
                      {input.name === "whatsApp" && (
                        <p>
                          El número de teléfono debe tener el siguiente formato:
                          cod. país + cod. de area + numero sin 15 (ej.
                          54116176278)
                        </p>
                      )}
                    </>
                  )}
                />
              </>
            ))}
          </div>
          <p className={styles.subTitle}>
            No compartiremos tus datos con absolutamente nadie.{requiredItem}
          </p>
        </main>
        <aside className={styles.totalCart}>
          {productList.length ? (
            <>
              <div>
                <h1 className={styles.totalTitle}>Carrito</h1>
                <PurchaseList className={styles.list} items={productList} />
              </div>
              <div className={styles.buttonPosition}>
                <button
                  className={styles.button}
                  type="submit"
                  onClick={handleGratitud}
                >
                  Comprar
                  {/* <a href="https://api.whatsapp.com/send?phone={REACT_APP_WHATSAPP_NUMBER}&text=avisa%20si%20anda">
                    Comprar
                  </a> */}
                </button>
              </div>
            </>
          ) : (
            <NoItem />
          )}
        </aside>
      </div>
    </form>
  );
}

export default Cart;
