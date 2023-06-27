import { Contact } from '../Contact'
import styles from './list.module.scss'
import { FaSadTear } from "react-icons/fa"
import { useContacts } from '../../hooks/useContacts'

export function List() {
    const { filteredContacts, search } = useContacts();

    return(
        <section className={styles.container}>
            {filteredContacts.map((item)=>{
                return(
                    <Contact key={item.id} contactData={item} />
                )
            })}
            {filteredContacts.length <= 0 && (
                <div className={styles.empty}>
                    <FaSadTear size={50} />
                    <div>
                        {search ? (
                            <>
                                <strong>No contact found...</strong>
                                <p>Search for another or add a new one</p>
                            </>
                        ) : (
                            <>
                                <strong>There is no information ...</strong>
                                <p>Add your contacts to start</p>
                            </>
                        )}
                    </div>
                </div>
            )}
        </section>
    )
}