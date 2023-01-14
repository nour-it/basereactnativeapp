import { StyleSheet, Text, View, BackHandler, Animated, ImageBackground, Image } from "react-native";
import React, { useRef } from "react";
import color from "../../../../src/var/color";
import { useState } from "react";
import { useEffect } from "react";
import dimension from "../../../../src/var/dimension";
import font from "../../../../src/var/font";
import NourTouchable from "../../../../components/core/NourTouchable";
import NourLinearGradient from "../../../../components/core/NourLinearGradient";
import NourInput from "../../../../components/core/NourInput";
import Contact from "../../../../src/models/Contact";
import NourAnimation from "../../../../components/core/NourAnimation";
import image from "../../../../src/var/image";
import icon from "../../../../src/var/icon";

const ContactForm = ({ onClose, onSave }) => {
	const [state, setState] = useState({
		mounted: false,
		name: null,
		number: null,
	});

	function closeForm() {
		onClose && onClose();
		return true;
	}

	useEffect(() => {
		BackHandler.addEventListener("hardwareBackPress", closeForm);
		setState((state) => ({ ...state, mounted: true }));

		return () => {
			setState((state) => ({ ...state, mounted: false }));
			BackHandler.removeEventListener("hardwareBackPress", closeForm);
		};
	}, []);

	if (!state.mounted) return;

	const updateNumber = (label, value) =>
		setState((state) => ({ ...state, [label]: value }));

	const updateName = (label, value) =>
		setState((state) => ({ ...state, [label]: value }));


	function saveContact() {
		if (state.number == null || state.number == "") return
		const contact = {
			number: state.number,
			name: state.name,
			lastMessageContent: "No Message Yet !",
			lastMessageDate: (new Date()).getTime()
		}
		let c = Contact.fromObject(contact);
		onSave(contact);
	}

	return (
		<View style={styles.bg}>
			<NourAnimation style={styles.container} type="slide_up">
				<View style={styles.form}>
					<NourInput fieldStyle={styles.field} inputStyle={styles.input} placeholder={"Number"} updateValue={updateNumber} label={"number"} />
					<NourInput fieldStyle={[styles.field, { borderBottomWidth: 0 }]} inputStyle={styles.input} placeholder={"Name"} updateValue={updateName} label={"name"} />
				</View>
				<NourLinearGradient>
					<NourTouchable innerStyle={styles.innerStyle} outerStyle={styles.outerStyle} onPress={saveContact} >
						<Text style={styles.btnText}>Save</Text>
					</NourTouchable>
				</NourLinearGradient>
			</NourAnimation>
		</View>
	);
};

export default ContactForm;

const styles = StyleSheet.create({
	bg: {
		position: "absolute",
		flex: 1,
		backgroundColor: color.black + "99",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
	},

	container: {
		position: "absolute",
		bottom: 50,
		left: 20,
		right: 20,
	},

	form: {
		backgroundColor: color.white,
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
	},

	field: {
		width: dimension.window.width - 40,
		height: 60,
		borderBottomColor: color.black + "33",
		borderBottomWidth: 1,
		justifyContent: "center",
	},
	input: {
		paddingHorizontal: 20,
		fontSize: 18,
		fontFamily: font.n_sb,
		
	},

	innerStyle: {
		width: dimension.window.width - 40,
		height: 40,
		alignItems: "center",
		justifyContent: "center",
	},
	outerStyle: {
		overflow: "hidden",
		position: "absolute",
		borderRadius: 20,
	},
	btnText: {
		color: color.white,
		fontFamily: font.n_b,
		fontSize: 24,
	},
});