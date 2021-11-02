import React, { Component } from 'react';
import styles from './styles.module.css';
import logo from './../../Images/netflix.png';
import search from './../../Images/search.svg';
import user1 from './../../Images/user1.jpg';
import bell from './../../Images/bell.svg';
import dropdown from './../../Images/dropdown.svg';
import classNames from 'classnames';
export default class Header extends Component {
    constructor(props){
        super(props)
        this.state={
            headerScroll:false,
        }
    }

    scrollEvent=(e)=>{
        if (window.scrollY > 10) {
            this.setState({headerScroll:true})
          } else {
            this.setState({headerScroll:false})
          }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.scrollEvent)
      }
    
    render() {
        return (
            <div className={classNames({[styles.headerScroll]:this.state.headerScroll},styles.header)}>
                <div className={styles.firstContainer}>
                    <img className={styles.logo} src={logo} alt = 'logo' />
                    <div className={styles.menuList}>
                        <div className={styles.menuItem}>{"Home"}</div>
                        <div className={styles.menuItem} >{"TV Shows"}</div>
                        <div className={styles.menuItem}>{"Movies"}</div>
                        <div className={styles.menuItem}>{"New & Popular"}</div>
                        <div className={styles.menuItem}>{"My List"}</div>
                    </div>
                </div>
                <div className={styles.secondContainer}>
                    <img src = {search} className={styles.searchBar} />
                    <div>{"Children"}</div>
                    <img src = {bell} className={styles.notification} />
                    <img src={user1} className={styles.user}  />
                    <img src={dropdown} className={styles.dropdown} />
                </div>
            </div>
        )
    }
}
