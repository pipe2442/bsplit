import { useForm } from "react-hook-form";
import './styles.scss'

const FormBill = ({ setTip, setUsers, setCustom }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    setTip(data.tip)
    setUsers(Number(data.users))
    setCustom(data.custom)
  };
   
  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <input className="form__input" type='number' placeholder="Insert tip amount" {...register("tip", { required: true })} />
      {errors.tip && <span className="error">Tip amount is required</span>}
      <input className="form__input" type='text' placeholder="Insert number of users" {...register("users", { required: true })} />
      {errors.users && <span className="error">Number of users is required</span>}
      <select className="form__input" {...register("custom")}>
        <option value={"A"}>Equal Parts</option>
        <option value={"B"}>Custom Percentage</option>
      </select>
      <input className="bill__submit form__submit" type="submit" value="Divide Bill" />
    </form>
  );
}

export default FormBill
