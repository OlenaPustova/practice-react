import ButtonsToAnalitics from "../ButtonsToAnalitics/ButtonsToAnalitics";
import HeaderWithGoBack from "../HeaderWithGoBack/HeaderWithGoBack";
import TransactionForm from "../TransactionForm/TransactionForm";

const MainPage = () => {
  return (
    <>
      <HeaderWithGoBack title={"Журнал видатків"} />
      <TransactionForm />
      <ButtonsToAnalitics />
    </>
  );
};

export default MainPage;
