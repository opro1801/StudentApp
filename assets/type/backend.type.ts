/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum AttachmentTypes {
  PHOTO = 'PHOTO',
  VIDEO = 'VIDEO',
  AUDIO = 'AUDIO',
  LINK = 'LINK',
  ICON = 'ICON',
}

export enum QuestionInputTypes {
  SHORT_QUESTION = 'SHORT_QUESTION',
  LONG_QUESTION = 'LONG_QUESTION',
  MULTIPLE_CHOICE = 'MULTIPLE_CHOICE',
  GRAPH = 'GRAPH',
}

export enum Subject {
  CHINESE = 'CHINESE',
  ENGLISH = 'ENGLISH',
  MATHEMATICS = 'MATHEMATICS',
  CHEMISTRY = 'CHEMISTRY',
  PHYSICS = 'PHYSICS',
}

export enum UserRole {
  ADMIN = 'ADMIN',
  TEACHER = 'TEACHER',
  TEACHING_ASSISTANT = 'TEACHING_ASSISTANT',
  STUDENT = 'STUDENT',
  TEMP_STUDENT = 'TEMP_STUDENT',
}

export enum CourseMemberStatus {
  INVITED = 'INVITED',
  ACTIVE = 'ACTIVE',
  REJECTED = 'REJECTED',
  DEACTIVE = 'DEACTIVE',
}

export enum ExamSystem {
  HKDSE = 'HKDSE',
  GCE = 'GCE',
}

export enum HomeworkInputTypes {
  ADAPTIVE = 'ADAPTIVE',
  NORMAL = 'NORMAL',
}

export interface TagFilterInput {
  subject?: Nullable<Subject>;
  questionBankId?: Nullable<string>;
}

export interface HomeworkPartialResponseFilterInput {
  studentId?: Nullable<string>;
  homeworkId?: Nullable<string>;
  homeworkResponseId?: Nullable<string>;
  questionId?: Nullable<string>;
}

export interface QuestionBankCreateInput {
  name: LocaleStringCreateInput;
  subject: Subject;
  examSystem: ExamSystem;
}

export interface LocaleStringCreateInput {
  en?: Nullable<string>;
  zh?: Nullable<string>;
}

export interface FolderCreateInput {
  questionBankId: string;
  name: LocaleStringCreateInput;
  parentFolderId?: Nullable<string>;
  icon?: Nullable<PhotoAttachmentCreateInput>;
  orderSequence?: Nullable<number>;
}

export interface PhotoAttachmentCreateInput {
  attachmentFileType: AttachmentTypes;
  size: number;
  fileURL: string;
  fileName: string;
  filePath: string;
  contentType: string;
  originalFileName: string;
}

export interface FolderUpdateInput {
  folderId: string;
  name?: Nullable<LocaleStringCreateInput>;
  icon?: Nullable<PhotoAttachmentCreateInput>;
  isClearIcon?: Nullable<boolean>;
}

export interface FolderAddOrRemoveTopicInput {
  folderId: string;
  topicId: string;
  isRemove?: Nullable<boolean>;
}

export interface FoldersRearrangeInput {
  folderOrderSequences: FolderOrderSequenceInput[];
}

export interface FolderOrderSequenceInput {
  folderId: string;
  orderSequence: number;
}

export interface TopicCreateInput {
  questionBankId: string;
  name: LocaleStringCreateInput;
  description?: Nullable<string>;
  parentTopicId?: Nullable<string>;
  orderSequence?: Nullable<number>;
  icon?: Nullable<PhotoAttachmentCreateInput>;
}

export interface TopicUpdateInput {
  topicId: string;
  name?: Nullable<LocaleStringCreateInput>;
  description?: Nullable<string>;
  isClearDescription?: Nullable<boolean>;
  icon?: Nullable<PhotoAttachmentCreateInput>;
  isClearIcon?: Nullable<boolean>;
  isEnable?: Nullable<boolean>;
  isFlagged?: Nullable<boolean>;
}

export interface TopicsRearrangeInput {
  topicOrderSequences: TopicOrderSequenceInput[];
}

export interface TopicOrderSequenceInput {
  topicId: string;
  orderSequence: number;
}

export interface ConceptCardCreateInput {
  questionBankId: string;
  topicId: string;
  name: LocaleStringCreateInput;
  description?: Nullable<string>;
  orderSequence?: Nullable<number>;
  photo?: Nullable<PhotoAttachmentCreateInput>;
  tagIds?: Nullable<string[]>;
}

export interface ConceptCardUpdateInput {
  conceptCardId: string;
  name?: Nullable<LocaleStringCreateInput>;
  description?: Nullable<string>;
  isClearDescription?: Nullable<boolean>;
  photo?: Nullable<PhotoAttachmentCreateInput>;
  isClearPhoto?: Nullable<boolean>;
  tagIds?: Nullable<string[]>;
}

export interface ConceptCardsRearrangeInput {
  conceptCardOrderSequences: ConceptCardOrderSequenceInput[];
}

export interface ConceptCardOrderSequenceInput {
  conceptCardId: string;
  orderSequence: number;
}

export interface QuestionCreateInput {
  level: number;
  questionBankId: string;
  groupId?: Nullable<string>;
  topicId: string;
  isFlaged?: Nullable<boolean>;
  inputType: QuestionInputTypes;
  contentMC?: Nullable<MCContentCreateInput>;
  contentShortQuestion?: Nullable<ShortQuestionContentCreateInput>;
  contentLongQuestion?: Nullable<LongQuestionContentCreateInput>;
  contentGraph?: Nullable<GraphContentCreateInput>;
  tagIds?: Nullable<string[]>;
  conceptCardIds?: Nullable<string[]>;
}

export interface MCContentCreateInput {
  body: LocaleStringCreateInput;
  answers: MCAnswerCreateInput[];
  correctAnswer: string;
  solution: LocaleStringCreateInput;
}

export interface MCAnswerCreateInput {
  body: LocaleStringCreateInput;
  optionName: string;
}

export interface ShortQuestionContentCreateInput {
  body: LocaleStringCreateInput;
  answer: string;
  solution: LocaleStringCreateInput;
}

export interface LongQuestionContentCreateInput {
  body: LocaleStringCreateInput;
  answer: string;
  solution: LocaleStringCreateInput;
}

export interface GraphContentCreateInput {
  body: LocaleStringCreateInput;
  answer: string;
  solution: LocaleStringCreateInput;
}

export interface QuestionUpdateInput {
  questionId: string;
  level: number;
  isFlaged?: Nullable<boolean>;
  contentMC?: Nullable<MCContentCreateInput>;
  contentShortQuestion?: Nullable<ShortQuestionContentCreateInput>;
  contentLongQuestion?: Nullable<LongQuestionContentCreateInput>;
  contentGraph?: Nullable<GraphContentCreateInput>;
  tagIds?: Nullable<string[]>;
  conceptCardIds?: Nullable<string[]>;
}

export interface TagCreateInput {
  questionBankId: string;
  name: LocaleStringCreateInput;
  subject: Subject;
}

export interface TagPerformanceUpsertBulkInput {
  userTagPerformances: TagPerformanceCreateInput[];
}

export interface TagPerformanceCreateInput {
  userId: string;
  tagId: string;
  performance: number;
}

export interface TagDifficultyUpdateBulkInput {
  tagDifficulties: TagDifficultyUpdateInput[];
}

export interface TagDifficultyUpdateInput {
  tagId: string;
  difficulty: number;
}

export interface GroupCreateInput {
  name: LocaleStringCreateInput;
  topicId: string;
  questionIds?: Nullable<string[]>;
  defaultQuestionId: string;
}

export interface GroupSetDefaultQuestionInput {
  groupId: string;
  defaultQuestionId: string;
  isClearDefaultQuestion?: Nullable<boolean>;
}

export interface GroupAddOrRemoveQuestionsInput {
  groupId: string;
  questionIds?: Nullable<string[]>;
  isRemove?: Nullable<boolean>;
}

export interface FirebaseUserRegisterInput {
  firebaseToken: string;
  userRole: UserRole;
}

export interface FirebaseUserLoginInput {
  firebaseToken: string;
}

export interface CourseCreateInput {
  name: string;
  subject: Subject;
  questionBankId: string;
  ownerId?: Nullable<string>;
}

export interface CourseInviteStudentInput {
  inviteeUserEmail: string;
  courseId: string;
}

export interface CourseInviteeAcceptInvitationInput {
  courseMemberId: string;
  isAccept: boolean;
}

export interface HomeworkCreateInput {
  courseId: string;
  name: string;
  studentIds?: Nullable<string[]>;
  inputType: HomeworkInputTypes;
  topicIds?: Nullable<string[]>;
  questionIds?: Nullable<string[]>;
  timeLimit: number;
  totalQuestions: number;
  offsetQuestions: number;
  startDate: DateTime;
  endDate: DateTime;
}

export interface HomeworkResponseCreateInput {
  homeworkId: string;
  studentId?: Nullable<string>;
}

export interface AttachmentType {
  attachmentFileType: AttachmentTypes;
}

export interface QuestionContentType {
  inputType: QuestionInputTypes;
}

export interface Node {
  id: string;
}

export interface ResponseFormat {
  isSuccess: boolean;
  code: number;
  errorMessage?: Nullable<string>;
}

export interface LocaleString {
  en?: Nullable<string>;
  zh?: Nullable<string>;
}

export interface Tag extends Node {
  id: string;
  name: LocaleString;
  subject: Subject;
  difficulty: number;
  questionBankId?: Nullable<string>;
}

export interface User extends Node {
  id: string;
  firebaseUid: string;
  name: string;
  email: string;
  photoURL?: Nullable<string>;
  role: UserRole[];
  coursesAsTeacher: CourseMember[];
  coursesAsStudent: CourseMember[];
}

export interface TagPerformance extends Node {
  id: string;
  userId: string;
  user: User;
  tagId: string;
  tag: Tag;
  performance: number;
}

export interface CourseMember extends Node {
  id: string;
  userEmail: string;
  userId?: Nullable<string>;
  user?: Nullable<User>;
  tagsPerformance: TagPerformance[];
  courseName: string;
  course: Course;
  status: CourseMemberStatus;
  role: UserRole;
}

export interface PhotoAtachment extends AttachmentType {
  attachmentFileType: AttachmentTypes;
  size: number;
  fileURL: string;
  fileName: string;
  filePath: string;
  contentType: string;
  originalFileName: string;
}

export interface LinkAtachment extends AttachmentType {
  attachmentFileType: AttachmentTypes;
  url: string;
  name: string;
}

export interface Group {
  id: string;
  topicId: string;
  topic: Topic;
  topicAncestorIds: string[];
  name: LocaleString;
  defaultQuestionId?: Nullable<string>;
  defaultQuestion?: Nullable<Question>;
  questions: Question[];
  questionIds: string[];
}

export interface Topic extends Node {
  id: string;
  name: LocaleString;
  description?: Nullable<string>;
  isEnable: boolean;
  isFlagged: boolean;
  subject: Subject;
  subTopics?: Nullable<Topic[]>;
  groups: Group[];
  questions: Question[];
  orderSequence: number;
  icon?: Nullable<PhotoAtachment>;
  createAt: DateTime;
}

export interface Folder extends Node {
  id: string;
  topics: Topic[];
  name: LocaleString;
  icon?: Nullable<PhotoAtachment>;
  subject: Subject;
  isEnable: boolean;
  isFlagged: boolean;
  orderSequence: number;
  subFolders: Folder[];
}

export interface QuestionBank extends Node {
  id: string;
  name: LocaleString;
  subject: Subject;
  examSystem: ExamSystem;
  folders: Folder[];
  topics: Topic[];
  unclassifiedTopics: Topic[];
}

export interface ConceptCard extends Node {
  id: string;
  name: LocaleString;
  description?: Nullable<string>;
  topic?: Nullable<Topic>;
  questionBank: QuestionBank;
  subject: Subject;
  questions: Question[];
  orderSequence: number;
  photo?: Nullable<PhotoAtachment>;
  tags: Tag[];
  createAt: DateTime;
}

export interface Question extends Node {
  id: string;
  level: number;
  groupId?: Nullable<string>;
  topicAncestorIds: string[];
  isFlaged: boolean;
  inputType: QuestionInputTypes;
  content: QuestionContentType;
  tags: Tag[];
  conceptCards: ConceptCard[];
}

export interface MCContent extends QuestionContentType {
  inputType: QuestionInputTypes;
  body: LocaleString;
  answers: MCAnswer[];
  correctAnswer: string;
  solution: LocaleString;
  attachments: AttachmentType[];
}

export interface MCAnswer {
  optionName: string;
  body: LocaleString;
  attachments: AttachmentType[];
}

export interface ShortQuestionContent extends QuestionContentType {
  inputType: QuestionInputTypes;
  body: LocaleString;
  answer: string;
  solution: LocaleString;
  attachments: AttachmentType[];
}

export interface LongQuestionContent extends QuestionContentType {
  inputType: QuestionInputTypes;
  body: LocaleString;
  answer: string;
  solution: LocaleString;
  attachments: AttachmentType[];
}

export interface GraphContent extends QuestionContentType {
  inputType: QuestionInputTypes;
  body: LocaleString;
  answer: string;
  solution: LocaleString;
  attachments: AttachmentType[];
}

export interface Lesson {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  students: Student[];
}

export interface Student {
  id: string;
  firstName: string;
  lastName: string;
  lessons: Lesson[];
  test: string[];
}

export interface QuestionResponseType {
  questionSequence: number;
  questionId: string;
  question: Question;
  studentAnswer: string;
  isCorrect: boolean;
  isFinished: boolean;
  timeUsed: number;
}

export interface SessionResponseType {
  sessionSequence: number;
  questionResponses: QuestionResponseType[];
  isFinished: boolean;
  timeUsed: number;
}

export interface HomeworkResponse extends Node {
  id: string;
  homeworkId: string;
  studentId: string;
  student: Student;
  sessionResponses: SessionResponseType[];
  currentActiveSessionSequence: number;
  isFinished: boolean;
}

export interface Homework extends Node {
  id: string;
  name: string;
  selectedStudents: User[];
  inputType: HomeworkInputTypes;
  selectedTopics: Topic[];
  selectedQuestions: Question[];
  timeLimit: number;
  totalQuestions: number;
  offsetQuestions: number;
  startDate: DateTime;
  endDate: DateTime;
  createdAt: DateTime;
  homeworkResponses: HomeworkResponse[];
}

export interface Course extends Node {
  id: string;
  name: string;
  studyYear: number;
  subject: Subject;
  questionBank: QuestionBank;
  students: CourseMember[];
  teachers: CourseMember[];
  homeworks: Homework[];
}

export interface HomeworkPartialResponse extends Node {
  id: string;
  homeworkId: string;
  homeworkResponseId: string;
  studentId: string;
  questionId: string;
  question: Question;
  studentAnswer: string;
  isCorrect: boolean;
  timeUsed: number;
  createAt: DateTime;
}

export interface AuthFirebaseLoginOutput extends ResponseFormat {
  isSuccess: boolean;
  code: number;
  errorMessage?: Nullable<string>;
  token?: Nullable<string>;
  data?: Nullable<string>;
}

export interface AuthFirebaseRegisterOutput extends ResponseFormat {
  isSuccess: boolean;
  code: number;
  errorMessage?: Nullable<string>;
  data?: Nullable<User>;
}

export interface QBFolderCreateOutput extends ResponseFormat {
  isSuccess: boolean;
  code: number;
  errorMessage?: Nullable<string>;
  data?: Nullable<Folder>;
}

export interface QBQuestionCreateOutput extends ResponseFormat {
  isSuccess: boolean;
  code: number;
  errorMessage?: Nullable<string>;
  data?: Nullable<Question>;
}

export interface QBQuestionDeleteOutput extends ResponseFormat {
  isSuccess: boolean;
  code: number;
  errorMessage?: Nullable<string>;
  data?: Nullable<Question>;
}

export interface QBTagCreateOutput extends ResponseFormat {
  isSuccess: boolean;
  code: number;
  errorMessage?: Nullable<string>;
  data?: Nullable<Tag>;
}

export interface QBTagPerformanceCreateBulkOutput extends ResponseFormat {
  isSuccess: boolean;
  code: number;
  errorMessage?: Nullable<string>;
  data?: Nullable<TagPerformance[]>;
}

export interface QBQuestionBankCreateOutput extends ResponseFormat {
  isSuccess: boolean;
  code: number;
  errorMessage?: Nullable<string>;
  data?: Nullable<QuestionBank>;
}

export interface QBTopicCreateOutput extends ResponseFormat {
  isSuccess: boolean;
  code: number;
  errorMessage?: Nullable<string>;
  data?: Nullable<Topic>;
}

export interface QBTagDifficultyUpdateBulkOutput extends ResponseFormat {
  isSuccess: boolean;
  code: number;
  errorMessage?: Nullable<string>;
  data?: Nullable<Tag[]>;
}

export interface QBTopicUpdateOutput extends ResponseFormat {
  isSuccess: boolean;
  code: number;
  errorMessage?: Nullable<string>;
  data?: Nullable<Topic>;
}

export interface QBTopicDeleteOutput extends ResponseFormat {
  isSuccess: boolean;
  code: number;
  errorMessage?: Nullable<string>;
  data?: Nullable<Topic>;
}

export interface QBTopicsRearrangeOuput extends ResponseFormat {
  isSuccess: boolean;
  code: number;
  errorMessage?: Nullable<string>;
  data?: Nullable<Topic[]>;
}

export interface QBFolderUpdateOutput extends ResponseFormat {
  isSuccess: boolean;
  code: number;
  errorMessage?: Nullable<string>;
  data?: Nullable<Folder>;
}

export interface QBFolderDeleteOutput extends ResponseFormat {
  isSuccess: boolean;
  code: number;
  errorMessage?: Nullable<string>;
  data?: Nullable<Folder>;
}

export interface QBFoldersRearrangeOuput extends ResponseFormat {
  isSuccess: boolean;
  code: number;
  errorMessage?: Nullable<string>;
  data?: Nullable<Folder[]>;
}

export interface QBGroupCreateOutput extends ResponseFormat {
  isSuccess: boolean;
  code: number;
  errorMessage?: Nullable<string>;
  data?: Nullable<Group>;
}

export interface QBConceptCardCreateOutput extends ResponseFormat {
  isSuccess: boolean;
  code: number;
  errorMessage?: Nullable<string>;
  data?: Nullable<ConceptCard>;
}

export interface QBConceptCardDeleteOutput extends ResponseFormat {
  isSuccess: boolean;
  code: number;
  errorMessage?: Nullable<string>;
  data?: Nullable<ConceptCard>;
}

export interface QBConceptCardUpdateOutput extends ResponseFormat {
  isSuccess: boolean;
  code: number;
  errorMessage?: Nullable<string>;
  data?: Nullable<ConceptCard>;
}

export interface QBConceptCardsRearrangeOuput extends ResponseFormat {
  isSuccess: boolean;
  code: number;
  errorMessage?: Nullable<string>;
  data?: Nullable<ConceptCard[]>;
}

export interface QBQuestionUpdateOutput extends ResponseFormat {
  isSuccess: boolean;
  code: number;
  errorMessage?: Nullable<string>;
  data?: Nullable<Question>;
}

export interface QBGroupSetDefaultQuestionOutput extends ResponseFormat {
  isSuccess: boolean;
  code: number;
  errorMessage?: Nullable<string>;
  data?: Nullable<Group>;
}

export interface QBGroupAddOrRemoveQuestionsOutput extends ResponseFormat {
  isSuccess: boolean;
  code: number;
  errorMessage?: Nullable<string>;
  data?: Nullable<Group>;
}

export interface CMCourseCreateOutput extends ResponseFormat {
  isSuccess: boolean;
  code: number;
  errorMessage?: Nullable<string>;
  data?: Nullable<Course>;
}

export interface CMCourseInviteStudentOutput extends ResponseFormat {
  isSuccess: boolean;
  code: number;
  errorMessage?: Nullable<string>;
  data?: Nullable<CourseMember>;
}

export interface CMCourseInviteeAcceptInvitationOutput extends ResponseFormat {
  isSuccess: boolean;
  code: number;
  errorMessage?: Nullable<string>;
  data?: Nullable<CourseMember>;
}

export interface CMHomeworkCreateOutput extends ResponseFormat {
  isSuccess: boolean;
  code: number;
  errorMessage?: Nullable<string>;
  data?: Nullable<Homework>;
}

export interface CMHomeworkResponseCreateOutput extends ResponseFormat {
  isSuccess: boolean;
  code: number;
  errorMessage?: Nullable<string>;
  data?: Nullable<HomeworkResponse>;
}

export interface IQuery {
  topics(): Topic[] | Promise<Topic[]>;
  topic(id: string): Nullable<Topic> | Promise<Nullable<Topic>>;
  questions(): Question[] | Promise<Question[]>;
  question(id: string): Nullable<Question> | Promise<Nullable<Question>>;
  tags(tagFilterInput?: Nullable<TagFilterInput>): Tag[] | Promise<Tag[]>;
  tag(id: string): Nullable<Tag> | Promise<Nullable<Tag>>;
  groups(): Group[] | Promise<Group[]>;
  group(id: string): Nullable<Group> | Promise<Nullable<Group>>;
  conceptCards(): ConceptCard[] | Promise<ConceptCard[]>;
  conceptCard(
    id: string,
  ): Nullable<ConceptCard> | Promise<Nullable<ConceptCard>>;
  questionBanks(): QuestionBank[] | Promise<QuestionBank[]>;
  questionBank(
    id: string,
  ): Nullable<QuestionBank> | Promise<Nullable<QuestionBank>>;
  folders(): Folder[] | Promise<Folder[]>;
  folder(id: string): Nullable<Folder> | Promise<Nullable<Folder>>;
  courses(): Course[] | Promise<Course[]>;
  course(id: string): Nullable<Course> | Promise<Nullable<Course>>;
  courseMembers(): CourseMember[] | Promise<CourseMember[]>;
  courseMember(
    id: string,
  ): Nullable<CourseMember> | Promise<Nullable<CourseMember>>;
  homeworks(): Homework[] | Promise<Homework[]>;
  homework(id: string): Nullable<Homework> | Promise<Nullable<Homework>>;
  homeworkResponses(): HomeworkResponse[] | Promise<HomeworkResponse[]>;
  homeworkResponse(
    id: string,
  ): Nullable<HomeworkResponse> | Promise<Nullable<HomeworkResponse>>;
  homeworkPartialResponses(
    homeworkPartialResponseFilterInput?: Nullable<HomeworkPartialResponseFilterInput>,
  ): HomeworkPartialResponse[] | Promise<HomeworkPartialResponse[]>;
  homeworkPartialResponse(
    id: string,
  ):
    | Nullable<HomeworkPartialResponse>
    | Promise<Nullable<HomeworkPartialResponse>>;
  users(): User[] | Promise<User[]>;
  user(id: string): Nullable<User> | Promise<Nullable<User>>;
  tagPerformances(): TagPerformance[] | Promise<TagPerformance[]>;
  tagPerformancesByUserId(
    userId: string,
  ): Nullable<TagPerformance[]> | Promise<Nullable<TagPerformance[]>>;
  me(): User | Promise<User>;
}

export interface IMutation {
  qbQuestionBankCreate(
    questionBankCreateInput: QuestionBankCreateInput,
  ): QBQuestionBankCreateOutput | Promise<QBQuestionBankCreateOutput>;
  qbFolderCreate(
    folderCreateInput: FolderCreateInput,
  ): QBFolderCreateOutput | Promise<QBFolderCreateOutput>;
  qbFolderUpdateById(
    folderUpdateInput: FolderUpdateInput,
  ): QBFolderUpdateOutput | Promise<QBFolderUpdateOutput>;
  qbFolderAddOrRemoveTopicById(
    folderAddOrRemoveTopicInput: FolderAddOrRemoveTopicInput,
  ): QBFolderUpdateOutput | Promise<QBFolderUpdateOutput>;
  qbFolderDeleteById(
    folderId: string,
  ): QBFolderDeleteOutput | Promise<QBFolderDeleteOutput>;
  qbFoldersRearrangeByIds(
    foldersRearrangeInput: FoldersRearrangeInput,
  ): QBFoldersRearrangeOuput | Promise<QBFoldersRearrangeOuput>;
  qbTopicCreate(
    topicCreateInput: TopicCreateInput,
  ): QBTopicCreateOutput | Promise<QBTopicCreateOutput>;
  qbTopicUpdateById(
    topicUpdateInput: TopicUpdateInput,
  ): QBTopicUpdateOutput | Promise<QBTopicUpdateOutput>;
  qbTopicDeleteById(
    topicId: string,
  ): QBTopicDeleteOutput | Promise<QBTopicDeleteOutput>;
  qbTopicsRearrangeByIds(
    topicsRearrangeInput: TopicsRearrangeInput,
  ): QBTopicsRearrangeOuput | Promise<QBTopicsRearrangeOuput>;
  qbConceptCardCreate(
    conceptCardCreateInput: ConceptCardCreateInput,
  ): QBConceptCardCreateOutput | Promise<QBConceptCardCreateOutput>;
  qbConceptCardUpdateById(
    conceptCardUpdateInput: ConceptCardUpdateInput,
  ): QBConceptCardUpdateOutput | Promise<QBConceptCardUpdateOutput>;
  qbConceptCardDeleteById(
    conceptCardId: string,
  ): QBConceptCardDeleteOutput | Promise<QBConceptCardDeleteOutput>;
  qbConceptCardsRearrangeByIds(
    conceptCardsRearrangeInput: ConceptCardsRearrangeInput,
  ): QBConceptCardsRearrangeOuput | Promise<QBConceptCardsRearrangeOuput>;
  qbQuestionCreate(
    questionCreateInput: QuestionCreateInput,
  ): QBQuestionCreateOutput | Promise<QBQuestionCreateOutput>;
  qbQuestionUpdateById(
    questionUpdateInput: QuestionUpdateInput,
  ): QBQuestionUpdateOutput | Promise<QBQuestionUpdateOutput>;
  qbQuestionDeleteById(
    questionId: string,
  ): QBQuestionDeleteOutput | Promise<QBQuestionDeleteOutput>;
  qbTagCreate(
    tagCreateInput: TagCreateInput,
  ): QBTagCreateOutput | Promise<QBTagCreateOutput>;
  qbTagPerformanceUpsertBulk(
    tagPerformanceUpsertBulkInput: TagPerformanceUpsertBulkInput,
  ):
    | QBTagPerformanceCreateBulkOutput
    | Promise<QBTagPerformanceCreateBulkOutput>;
  qbTagDifficultyUpdateBulk(
    tagDifficultyUpdateBulkInput: TagDifficultyUpdateBulkInput,
  ): QBTagDifficultyUpdateBulkOutput | Promise<QBTagDifficultyUpdateBulkOutput>;
  qbGroupCreate(
    groupCreateInput: GroupCreateInput,
  ): QBGroupCreateOutput | Promise<QBGroupCreateOutput>;
  qbGroupSetDefaultQuestionById(
    groupSetDefaultQuestionInput: GroupSetDefaultQuestionInput,
  ): QBGroupSetDefaultQuestionOutput | Promise<QBGroupSetDefaultQuestionOutput>;
  qbGroupAddOrRemoveQuestionsById(
    groupAddOrRemoveQuestionsInput: GroupAddOrRemoveQuestionsInput,
  ):
    | QBGroupAddOrRemoveQuestionsOutput
    | Promise<QBGroupAddOrRemoveQuestionsOutput>;
  firebaseUserRegister(
    firebaseUserRegisterInput: FirebaseUserRegisterInput,
  ): AuthFirebaseRegisterOutput | Promise<AuthFirebaseRegisterOutput>;
  firebaseUserLogin(
    firebaseUserLoginInput: FirebaseUserLoginInput,
  ): AuthFirebaseLoginOutput | Promise<AuthFirebaseLoginOutput>;
  devUserLogin(
    email: string,
  ): AuthFirebaseLoginOutput | Promise<AuthFirebaseLoginOutput>;
  cmCourseCreate(
    courseCreateInput: CourseCreateInput,
  ): CMCourseCreateOutput | Promise<CMCourseCreateOutput>;
  cmCourseInviteStudent(
    courseInviteStudentInput: CourseInviteStudentInput,
  ): CMCourseInviteStudentOutput | Promise<CMCourseInviteStudentOutput>;
  cmCourseInviteeAcceptInvitation(
    courseInviteeAcceptInvitationInput: CourseInviteeAcceptInvitationInput,
  ):
    | CMCourseInviteeAcceptInvitationOutput
    | Promise<CMCourseInviteeAcceptInvitationOutput>;
  cmHomeworkCreate(
    homeworkCreateInput: HomeworkCreateInput,
  ): CMHomeworkCreateOutput | Promise<CMHomeworkCreateOutput>;
  cmHomeworkResponseCreate(
    homeworkResponseCreateInput: HomeworkResponseCreateInput,
  ): CMHomeworkResponseCreateOutput | Promise<CMHomeworkResponseCreateOutput>;
}

export type DateTime = any;
type Nullable<T> = T | null;

// After Backend type

export interface TextAreaInputType {
  body: LocaleString;
  attachments: AttachmentType[];
}

// export interface AnswerType {
//     answers: OptionType[];
//     correctAnswer: string;
// }

// export interface OptionType {
//     optionName: string; //A, B, C, D
//     body: LocaleString; //content
//     attachments: AttachmentType[];
// }

// export enum AttachmentTypes {
//     PHOTO = "PHOTO",
//     VIDEO = "VIDEO",
//     AUDIO = "AUDIO",
//     LINK = "LINK"
// }

// export interface AttachmentType {
//     attachmentFileType: AttachmentTypes;
// }
