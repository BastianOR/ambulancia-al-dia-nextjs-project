export function buildTransfer(inaddress, inpatient, incontact, inday, inmonth, intime, intool) {
    const newTransfer = {
        scheduler: "",
        address: inaddress,
        patient: inpatient,
        contact: incontact,
        day: inday,
        month: inmonth,
        time: intime,
        tool: intool,
        completed: false
    };
    return newTransfer;
}

export async function postNewTransfer(newTransfer){
    const response = await fetch("/api/v1/agenda", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTransfer),
    });
    if (response.ok){
        return true;
    } else {
        return false;
    }
}