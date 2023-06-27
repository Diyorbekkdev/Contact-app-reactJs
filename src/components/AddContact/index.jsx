import { Input } from '../Input'
import styles from './addcontact.module.scss'
import {MdPersonAddAlt1 , MdAddCircle , MdRemoveCircle} from 'react-icons/md'
import { useState } from 'react'
import { useContacts } from '../../hooks/useContacts'

export function AddContact() {
    const [isShowing , setIsShowing] = useState(false)
    const [avatar , setAvatar] = useState("")
    const [name , setName] = useState("")
    const [phone , setPhone] = useState("")

    const { addContact } = useContacts();

    function toggleForm() {
        setIsShowing(!isShowing);
    }

    function onSubmit(event) {
        event.preventDefault()
        addContact({
            id: crypto.randomUUID(),
            name: name,
            phone: phone,
            avatar: !avatar ? null : avatar
        })
        setAvatar("")
        setName("")
        setPhone("")
    }

    function onChangeAvatar(event) {
        setAvatar(event.target.value.trim(""))
    }

    function onChangeName(event) {
        setName(event.target.value)
    }

    function onChangePhone(event) {
        setPhone(event.target.value)
    }

    return(
        <section className={styles.container}>
            <header className={styles.header}>
                <button onClick={toggleForm} className={isShowing ? styles.circle : ""} style={isShowing ? { background: '#fe6161' } : {}}>
                    {isShowing ? (
                            <MdRemoveCircle size={20}/>
                    ) : (
                        <>
                            <MdPersonAddAlt1 size={20}/>
                            Add Contact
                        </>
                    )}
                </button>
                <p className={styles.credits}>
                    Webdeveloper<span>❤</span>is<a href="https://t.me/diyorbek_juraev_blog" target="_blank">Diyorbek_dev</a>
                </p>
            </header>
            {isShowing && (
                <form onSubmit={onSubmit}className={styles.form}>
                    <Input placeholder='URL photo' onChange={onChangeAvatar} value={avatar}/>
                    <Input placeholder='Name *' required onChange={onChangeName} value={name}/>
                    <Input placeholder='Phone number *' required onChange={onChangePhone} value={phone}/>
                    <button className={styles.circle}><MdAddCircle size={20}/></button>
                </form>
            )}
        </section>
    )
}