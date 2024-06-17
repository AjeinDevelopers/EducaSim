import React from 'react';
import {useState, useCallback} from 'react';
import './input.css'

/*
*
* Propiedades de los INPUT:
*
-- props.required: Esta propiedad es un booleano que indica si el campo de entrada es obligatorio o no.
* Si el campo es obligatorio y el usuario no introduce ningún valor, se muestra un mensaje de error.

-- props.register: Esta propiedad es un booleano que indica si el componente está en modo de registro.
* Si está en modo de registro, se realizan validaciones adicionales en los campos de entrada.

-- props.EmailError y props.PasswordError: Estas son funciones que se llaman cuando hay un error
* en el campo de correo electrónico o contraseña, respectivamente. Esta funcion se utiliza para actualizar
* el estado si es que se puede enviar el formulario o no.

-- props.estilo: Esta propiedad se utiliza para aplicar estilos al contenedor de entrada.
* Los valores posibles no están claros sin más contexto, pero parecen ser cadenas de texto.

-- props.label: Esta propiedad es una cadena de texto que se utiliza como etiqueta para el campo de entrada.

-- props.name y props.id: Estas propiedades se utilizan para establecer el atributo name y id del campo de entrada, respectivamente.

-- props.showIcon1 y props.icon1: Estas propiedades se utilizan para mostrar un icono junto
* al campo de entrada. props.showIcon1 es un booleano que indica si se debe mostrar el icono, y props.icon1
* es una cadena de texto que indica qué icono se debe mostrar.

-- props.InputError: Esta es una función que se llama cuando hay un error
* en el campo de entrada del componente Input. Esta funcion se utiliza para actualizar
* el estado si es que se puede enviar el formulario o no.

* */


export default function Input(props){

    const [lleno, setLleno] = useState(true);
    const [error, setError] = useState("");
    const [estilo, setEstilo] = useState(props.Style);

    const handleInput = useCallback((event) => {
        const newInput = event.target.value;

        if(props.required) {
            if (newInput.trim() === '') {
                setError("El campo no puede estar vacio");
                props.InputError(true);
                setLleno(false);
                setEstilo("error");
            } else {
                props.InputError(false);
                props.contenido(newInput.trim());
                setLleno(true);
                setEstilo("primary");
            }
        }
    }, [props.InputError]);

    return(

        <div id={"Input-container"} className={estilo}>
            {props.showLabel && <div className={"label-container"}>
                 <t5 className={"label"}>{props.label}</t5>
                {props.required && <i className={"fa-solid fa-asterisk fa-fw"} style={{color: "#F24040"}}></i>}
            </div>}
            <input-container className={props.estilo}>
                <input type= "text"
                       name={props.name}
                       id={props.id}
                       maxLength={props.maxLength}
                       onChange={handleInput}
                       required={props.required}
                       placeholder={props.placeholder}
                       value={props.value}/>
                {props.showIcon1 && <i className={props.icon1} style={{color: "var(--color-principal, #4BA8FF)"}}></i>}
            </input-container>
            {!lleno &&
                <div className={"label-container"}>
                    <t6 className={"label"}>{error}</t6>
                </div>
            }
        </div>

    )
}