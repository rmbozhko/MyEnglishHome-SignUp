import { objectCreating } from "./objectCreating";
import { representativeCheck } from "./representativeCheck";
import { representativePOST } from "./representativePOST";
import { studentCheck } from "./studentCheck";
import { studentPOST } from "./studentPOST";

const TOKEN = process.env.REACT_APP_TOKEN;
const AUTH = process.env.REACT_APP_AUTH;
const PATH = process.env.REACT_APP_API_PATH;
const PATH_HANDLER = process.env.REACT_APP_API_PATH_HANDLER;

export const onSubmitFunc = async (data, ageUnderEi, watch, setIsSuccess, setIsModalVisible, setError, setPage) => {
    const representative = ageUnderEi || watch('payment') === 'parent' ? objectCreating({ firstName: data.firstNameParent, secondName: data.secondNameParent, year: data.yearParent, phone: data.phoneParent }) : null;;
    const student = objectCreating({ firstName: data.firstName, secondName: data.secondName, year: data.year, month: data.month, day: data.day, phone: data.phone });
    if (representative) {
        const response = await representativeCheck(representative, PATH, TOKEN, AUTH);
        const responsedata = await response.json();
        if (response.status === 404) {
            const responsePOST = await representativePOST(representative, PATH, TOKEN, AUTH);
            const responsePOSTdata = await responsePOST.json();
            if (responsePOST?.status === 200) {
                student.studentRepresentativeId = responsePOSTdata.id;
            } else {
                setIsSuccess(false);
                setIsModalVisible(true);
                setTimeout(() => setIsModalVisible(false), 10000);
                return;
            }
        } else if (response.status === 200) {
            student.studentRepresentativeId = responsedata.id;
        } else {
            setIsSuccess(false);
            setIsModalVisible(true);
            setTimeout(() => setIsModalVisible(false), 10000);
            return;
        }
    }

    const response = await studentCheck(student, PATH, TOKEN, AUTH);
    if (response.status === 404) {
        const responsePOST = await studentPOST(student, PATH, TOKEN, AUTH);
        if (responsePOST.status !== 200) {
            setIsSuccess(false);
            setIsModalVisible(true);
            setTimeout(() => setIsModalVisible(false), 10000);
            return;
        }
    } else if (response.status === 200) {
        setIsSuccess(false);
        setError('phone', { type: 'custom', message: 'Даний номер телефону вже зареєстровано. Вкажіть, будь ласка, інший' })
        setPage(1);
        return;
    } else {
        setIsSuccess(false);
        setIsModalVisible(true);
        setTimeout(() => setIsModalVisible(false), 10000);
        return;
    }
    await studentPOST({ 'firstname': student.firstname, 'lastname': student.lastname }, PATH_HANDLER, TOKEN, AUTH);
    setIsSuccess(true);
    setIsModalVisible(true);
    setTimeout(() => {
        window.location.href = 'https://www.facebook.com/MyEnglishHomeBoryspil';
    }, 5000);
    return;
};