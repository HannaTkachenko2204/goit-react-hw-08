import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
// import PageTitle from "../../components/PageTitle/PageTitle";
import { selectLoading } from "../../redux/contacts/selectors";
import css from "./ContactsPage.module.css";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {/* <PageTitle>Phonebook</PageTitle> */}
      <div className={css.contact_tools}>
      <ContactForm />
      <SearchBox />
      </div>
      {isLoading && "Request in progress..."}
      <ContactList />
    </>
  );
}
