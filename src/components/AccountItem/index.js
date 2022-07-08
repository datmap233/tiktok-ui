import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss"

const cx = classNames.bind(styles)

function AccountItem() {
    return <div className={cx('wrapper')}>
        <img className={cx('avatar')} src="https://scontent.fsgn8-2.fna.fbcdn.net/v/t1.6435-1/197803778_330501788443763_5609391856372322682_n.jpg?stp=c50.0.200.200a_dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=c6021c&_nc_ohc=rdkN0MdHKV4AX_VqwQy&_nc_ht=scontent.fsgn8-2.fna&oh=00_AT-kHqWYM6QyHrERTaSTr9boPT-7C4o3FIPN2bTk-3j08Q&oe=62D730E5" alt="hihi" />
        <div className={cx('info')}>
            <h4 className={cx('name')}>
                <span>Harry Maguire</span>
                <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
            </h4>
            <span className={cx('username')}>harrymaguire</span>
        </div>
    </div>;
}

export default AccountItem;