import { Component } from "react";
import styles from "./ipad.module.css"
import Controller from "./controller";

class Ipad extends Component{

    render(){
        return(
            <>
            <div className={styles.container}>
                <Controller />
            </div>
            </>
        )
    }
}

export default Ipad;