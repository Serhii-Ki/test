import styles from './counter.module.css';

type ButtonPropsType = {
	class?: string;
	title: string;
	onClick: () => void;
};

function CustomBtn(props: ButtonPropsType) {
	return (
		<button className={styles['btn']} onClick={props.onClick}>
			{props.title}
		</button>
	);
}

export default CustomBtn;
