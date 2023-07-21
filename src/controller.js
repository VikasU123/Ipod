import { Component } from "react";
import styles from "./controlles.module.css";

class Controller extends Component{

    render(){
        return(
            <>
            <div className={styles.controller}>
                <div className={styles.round_button}>
                    <span className={styles.menu_button}>MENU</span>
                    <img className={styles.left_button} src="https://cdn-icons-png.flaticon.com/512/26/26309.png" />
                    <img className={styles.right_button} src="https://cdn-icons-png.flaticon.com/512/26/26309.png" />
                    <img className={styles.bottem_button} src="https://cdn-icons-png.flaticon.com/512/64/64595.png" />
                    <div className={styles.center_button}></div>
                </div>
            </div>
            </>
        );
    }
}

export default Controller;