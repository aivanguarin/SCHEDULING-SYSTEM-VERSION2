export interface USER {
    id: number,
    username: string,
    role_id: string,
    last_login: string,
    created_at: string,
    updated_at: string,
    updated_by: string
}

export interface INSTRUCTOR {
    id: number,
    last_name: string,
    first_name: string,
    middle_name: string,
    suffix_name: string,
    sex: string,
    is_active: boolean,
    college_id: number,
    salutation: string,
    admin_function: string,
    admin_hrs: number,
    max_load: number,
    course_id: number,
    created_at: string,
    updated_at: string,
    updated_by: string
}