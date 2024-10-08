import axios from 'axios';
const base_url = 'http://www.boredapi.com/api/activity'; // para o exemplo -> COMENTAR

const API_BASE_URL = process.env.NEXT_PUBLIC_SAPHIRA_URL;

const ACCESS_TOKEN = 'access_token'
const REFRESH_TOKEN = 'refresh_token'
const STUDENT_ID = 'student_id'


const saphira = {

    // Para o exemplo -> COMENTAR
    getActivity: async () => {
        try {
            const response = await axios.get(base_url);
            return response.data;
        } catch (err) {
            console.log(err);
        }
    },

    registerUser: async (userData) => {
        const requestUrl = API_BASE_URL + "/user/add";

        const params = {
            full_name: userData.fullName,
            email: userData.email,
            usp_number: userData.usp_number,
            data_nascimento: userData.birthDate,
            genero: userData.gender,
            etnia: userData.ethnicity,
            curso: userData.course,
            periodo_curso: userData.graduationPeriod,
            como_conheceu: userData.knowAbout,
            em_estagio: userData.isInInternship,
            aceita_receber_email: userData.acceptedRecieveEmails
        };

        return axios.get(requestUrl, { params });
    },
}

export default saphira;




// const saphira = {

//     // Para o exemplo -> COMENTAR
//     getActivity: async () => {
//         try {
//             const response = await axios.get(base_url);
//             return response.data;
//         } catch (err) {
//             console.log(err);
//         }
//     },

//     // Função auxiliar - obtém o token de acesso
//     getAccessToken: async () => {

//         let accessToken = localStorage.getItem(ACCESS_TOKEN);

//         // Se o token de acesso não existe ou está expirado, renova o token
//         if (!accessToken || saphira.isTokenExpired(accessToken)) {
//             const refreshToken = localStorage.getItem(REFRESH_TOKEN);

//             if (!refreshToken) {
//                 console.error('Refresh token não encontrado. Faça login novamente.');
//                 return null;
//             }

//             try {
//                 const response = await axios.post(`${API_BASE_URL}/api/token/refresh/`, {
//                     refresh: refreshToken,
//                 });
//                 accessToken = response.data.access;
//                 localStorage.setItem(ACCESS_TOKEN, accessToken);
//                 return accessToken;
//             } catch (error) {
//                 console.error('Erro ao renovar token:', error);
//             }
//         }

//         return accessToken;
//     },

//     // Função auxiliar - verifica se o token está expirado
//     isTokenExpired: (token) => {
//         const payload = JSON.parse(atob(token.split('.')[1]));
//         const expirationTime = payload.exp * 1000;
//         return Date.now() >= expirationTime;
//     },

//     // Requisição autenticada: Atualizar estudante
//     updateStudent: async (usp_number) => {
//         const accessToken = await saphira.getAccessToken();
//         const requestUrl = `${API_BASE_URL}/student/${STUDENT_ID}`;

//         const params = {
//             usp_number
//         };

//         return axios.put(requestUrl, params, {
//             headers: {
//                 Authorization: `Bearer ${accessToken}`
//             }
//         });
//     },

//     // Requisição autenticada: Obter dados do estudante
//     getStudent: async () => {
//         const accessToken = await saphira.getAccessToken();
//         const requestUrl = `${API_BASE_URL}/student/${STUDENT_ID}`;

//         return axios.get(requestUrl, {
//             headers: {
//                 Authorization: `Bearer ${accessToken}`
//             }
//         });
//     },

//     // Requisição autenticada: Registrar presença online
//     registerOnlinePresence: async (token_code) => {
//         const accessToken = await saphira.getAccessToken();
//         const requestUrl = `${API_BASE_URL}/student/${STUDENT_ID}/presence`;

//         const params = {
//             token_code
//         };

//         return axios.post(requestUrl, params, {
//             headers: {
//                 Authorization: `Bearer ${accessToken}`
//             }
//         });
//     },

//     // Requisição autenticada: Listar presenças do estudante
//     listStudentPresences: async () => {
//         const accessToken = await saphira.getAccessToken();
//         const requestUrl = `${API_BASE_URL}/student/${STUDENT_ID}/presences`;

//         return axios.get(requestUrl, {
//             headers: {
//                 Authorization: `Bearer ${accessToken}`
//             }
//         });
//     },
// };

// export default saphira;