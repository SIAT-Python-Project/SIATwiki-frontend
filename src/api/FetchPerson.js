import axios from 'axios';

//GET
export async function fetchPersonProfile(personId) {
    const response = await axios.get(`/api/person/${personId}`);
    const data = await response.data;

    return data;
}

//GET(LIST)
export async function fetchPersonNames() {
    const response = await axios.get(`/api/person`);
    const data = await response.data;

    return data;
}

//PUT
export async function updatePersonProfile(personId, updatedContent) {
    try {
        const response = await axios.put(`/api/person/${personId}`, updatedContent);
        console.log(response.data);
    } catch (e) {
        console.log(e);
    }
}

//POST
export async function createPersonProfile(createdContent, imgFile) {
    const formData = new FormData();

    // 이미지 파일 추가
    if (imgFile != null) {
        formData.append('file', imgFile);
    }

    // JSON 데이터 추가
    const profileInfoJSON = JSON.stringify(createdContent);
    formData.append('person', new Blob([profileInfoJSON], { type: 'application/json' }));


    try{
    const response = await axios.post('/api/person'
        , formData
        , { headers: { 'Content-Type': 'multipart/form-data' } }
    );
    
    const regexp = /^https:\/\/github\.com\//;
    const userInfo = await response.data;
    if (!regexp.test(response.data.github)) {
        throw Error("깃허브 주소 형식이 올바르지 않아요")
    }else{
        return userInfo
    }
} catch(error){
    document.location.href='/person/creation';
    alert("깃허브 주소 형식이 올바르지 않습니다.");
    
}

}

//DELETE
export async function deletePersonProfile(personId) {
    try {
        const response = await axios.delete(`/api/person/${personId}`);
        console.log(response.data);
    } catch (e) {
        console.log(e);
    }
}