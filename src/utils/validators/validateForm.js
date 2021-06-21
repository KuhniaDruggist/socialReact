export const required = (value) => {
    return value
        ? undefined
        : 'Поле обязательное для заполнения';
}

export const maxLengthCreator = (max) => (value) => {
    return value && value.length > max
        ? `Поле не должно содержать болле ${max} символов`
        : undefined;
}