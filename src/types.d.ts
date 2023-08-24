//en este archivo typescript busca por defecto los tipos, en este caso le limitamos la posibilidad de scripts a cada tipo 

export type Weather = "sunny" | "rainy" | "cloudy" | "windy" | "stormy"
export type Visibility = "poor" | "good" | "ok" |"poor" 

export interface DiaryEntry{ 
    id: number;
    date: string;
    weather: Weather;
    visibility: Visibility;
    comment: string;
}

//export type NonSensitiveInfoDiaryEntry = Pick<DiaryEntry, "id" | "date" |"weather" |"visibility" >

export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, "comment">