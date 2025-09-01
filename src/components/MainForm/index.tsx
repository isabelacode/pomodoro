import { DefaultInput } from "../DefaultInput";


export function MainForm() {
  return (
    <form className='form' action=''>
       <div className='formRow'>
        <DefaultInput
          labelText='task'
          id='meuInput'
          type='text'
          placeholder='Digite algo'
        />
      </div>

      <div className="formRow">
         <p>Próximo intervalo é de 25min</p>
      </div>

    </form>
  );
}
