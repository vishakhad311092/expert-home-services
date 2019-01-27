
export const fetchServicesAvailble = () =>{
    return fetch("http://demo6992368.mockable.io/getHomeServices").then((resp)=>{
        if(resp.ok){
            return resp.json();
        }
        else{
            throw new Error();
        }
    }).catch((err)=>{
        return err
    })
}