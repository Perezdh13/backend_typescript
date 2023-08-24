import { DiaryEntry, NonSensitiveInfoDiaryEntry } from "../routes/types"
import diaryData from "./diary.json"

const diaries : Array<DiaryEntry> = diaryData as Array<DiaryEntry>

export const getEntries = (): DiaryEntry[] => diaries

export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoDiaryEntry[] => diaries

export const addEntry = (): undefined => undefined

