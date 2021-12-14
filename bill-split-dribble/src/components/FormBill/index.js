import { useForm } from "react-hook-form";
import './styles.scss'

const FormBill = ({ setTip, setUsers, setCustom }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data)
    setTip(data.tip)
    setUsers(data.users)
    setCustom(data.custom)
  };
   
  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <input className="form__input" type='number' placeholder="Insert tip amount" {...register("tip")} />
      <input className="form__input" type='text' placeholder="Insert number of users" {...register("users")} />
      <select className="form__input" {...register("custom")}>
        <option value={"A"}>Equal Parts</option>
        <option value={"B"}>Custom Percentage</option>
      </select>
      <input className="bill__submit form__submit" type="submit" value="Divide Bill" />
    </form>
  );
}

export default FormBill
