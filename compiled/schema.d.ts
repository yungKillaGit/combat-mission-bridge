export declare type date = string;
export declare type anything = any;
/**
 * Список существующих достижений
 */
export declare enum AchievementEnum {
    TeamPlayer = "TeamPlayer",
    Visitor = "Visitor",
    Correspondent = "Correspondent",
    LivingFullLife = "LivingFullLife",
    Warrior = "Warrior",
    RichSoul = "RichSoul",
    BorderGuard = "BorderGuard"
}
/**
 * Список возможных промокодов
 */
export declare enum PromoCodeType {
    Discount20VipFrom2Hours = "Discount20VipFrom2Hours"
}
export declare enum ReceivedPromoCode {
    visitor = "visitor",
    warrior = "warrior"
}
/**
 * Фильтр для поиска напарников в команду
 */
export declare namespace SearchFilterInput {
    type city = string;
    type gamesIds = number[];
}
export interface SearchFilterInput {
    city: SearchFilterInput.city;
    gamesIds: SearchFilterInput.gamesIds;
}
/**
 * Входные данные для сохранения профиля
 */
export declare namespace ProfileInput {
    type age = number;
    type about = string | null;
    type city = string | null;
    type clubId = number | null;
    type gamesIds = number[];
    type playTime = number | null;
    type stageId = number | null;
}
export interface ProfileInput {
    age: ProfileInput.age;
    about: ProfileInput.about;
    city: ProfileInput.city;
    clubId: ProfileInput.clubId;
    gamesIds: ProfileInput.gamesIds;
    playTime: ProfileInput.playTime;
    stageId: ProfileInput.stageId;
}
/**
 * Входные данные для регистрации пользователя
 */
export declare namespace UserInput {
    type avatarUrl = string;
}
export interface UserInput {
    avatarUrl: UserInput.avatarUrl;
}
/**
 * Отформатированный промокод для вывода пользователю
 */
export declare type UserPromoCode = UserOpenedPromoCode | UserClosedPromoCode;
/**
 * Базовый тип Query
 */
export declare namespace Query {
    type currentUser = CurrentUserInfo;
    type userTeam = Team | null;
    type user = UserInfo | null;
    namespace user {
        interface Arguments {
            id: number;
        }
    }
    type profileMeta = ProfileMeta;
    type mates = UserInfo[] | null;
    namespace mates {
        interface Arguments {
            searchFilter: SearchFilterInput;
        }
    }
    type achievements = Achievement[];
}
export interface Query {
    currentUser: Query.currentUser;
    userTeam: Query.userTeam;
    user: Query.user;
    profileMeta: Query.profileMeta;
    mates: Query.mates;
    achievements: Query.achievements;
}
/**
 * Информация о текущем пользователе
 */
export declare namespace CurrentUserInfo {
    type user = User;
    type receivedPromoCodes = ReceivedPromoCode[] | null;
}
export interface CurrentUserInfo {
    user: CurrentUserInfo.user;
    receivedPromoCodes: CurrentUserInfo.receivedPromoCodes;
}
/**
 * Пользователь
 */
export declare namespace User {
    type achievementsReceived = Achievement[];
    type achievementsProgress = AchievementProgress[];
    type activatedChecks = string[];
    type avatarUrl = string | null;
    type id = number;
    type promoCodes = UserPromoCode[];
    type profile = Profile | null;
    type points = number;
    type rank = Rank | null;
    type lastFixedVisitDate = number;
    type nextRank = Rank | null;
    type visitsInRow = number;
}
export interface User {
    achievementsReceived: User.achievementsReceived;
    achievementsProgress: User.achievementsProgress;
    activatedChecks: User.activatedChecks;
    avatarUrl: User.avatarUrl;
    id: User.id;
    promoCodes: User.promoCodes;
    profile: User.profile;
    points: User.points;
    rank: User.rank;
    lastFixedVisitDate: User.lastFixedVisitDate;
    nextRank: User.nextRank;
    visitsInRow: User.visitsInRow;
}
/**
 * Достижение
 */
export declare namespace Achievement {
    type id = AchievementEnum;
    type iconImageUrl = string;
    type title = string;
    type description = string;
    type points = number[] | null;
    type rankPoints = number[] | null;
    type storyImageUrls = string[];
    type snippetImageUrls = string[];
}
export interface Achievement {
    id: Achievement.id;
    iconImageUrl: Achievement.iconImageUrl;
    title: Achievement.title;
    description: Achievement.description;
    points: Achievement.points;
    rankPoints: Achievement.rankPoints;
    storyImageUrls: Achievement.storyImageUrls;
    snippetImageUrls: Achievement.snippetImageUrls;
}
/**
 * Запись, хранящая прогресс достижения
 */
export declare namespace AchievementProgress {
    type achievementId = AchievementEnum;
    type progress = number | null;
}
export interface AchievementProgress {
    achievementId: AchievementProgress.achievementId;
    progress: AchievementProgress.progress;
}
/**
 * Активированный пользователем промокод
 */
export declare namespace UserOpenedPromoCode {
    type id = string;
    type type = PromoCodeType;
    type title = string;
    type value = string;
    type openedAt = date;
    type expiresAt = date;
}
export interface UserOpenedPromoCode {
    id: UserOpenedPromoCode.id;
    type: UserOpenedPromoCode.type;
    title: UserOpenedPromoCode.title;
    value: UserOpenedPromoCode.value;
    openedAt: UserOpenedPromoCode.openedAt;
    expiresAt: UserOpenedPromoCode.expiresAt;
}
/**
 * Еще не открытый пользователем промокод
 */
export declare namespace UserClosedPromoCode {
    type id = string;
    type type = PromoCodeType;
    type title = string;
    type expiresAt = date;
}
export interface UserClosedPromoCode {
    id: UserClosedPromoCode.id;
    type: UserClosedPromoCode.type;
    title: UserClosedPromoCode.title;
    expiresAt: UserClosedPromoCode.expiresAt;
}
/**
 * Профиль пользователя
 */
export declare namespace Profile {
    type age = number;
    type about = string | null;
    type city = string;
    type clubId = number;
    type games = Game[];
    type playTime = number;
    type stage = Stage;
}
export interface Profile {
    age: Profile.age;
    about: Profile.about;
    city: Profile.city;
    clubId: Profile.clubId;
    games: Profile.games;
    playTime: Profile.playTime;
    stage: Profile.stage;
}
/**
 * Игра
 */
export declare namespace Game {
    type id = number;
    type title = string;
}
export interface Game {
    id: Game.id;
    title: Game.title;
}
/**
 * Стаж
 */
export declare namespace Stage {
    type id = number;
    type title = string;
}
export interface Stage {
    id: Stage.id;
    title: Stage.title;
}
/**
 * Ранг который присуждается пользователю
 */
export declare namespace Rank {
    type name = string;
    type minPoints = number;
    type imageUrl = string;
}
export interface Rank {
    name: Rank.name;
    minPoints: Rank.minPoints;
    imageUrl: Rank.imageUrl;
}
/**
 * Команда пользователей
 */
export declare namespace Team {
    type _id = anything;
    type users = TeamUser[];
}
export interface Team {
    _id: Team._id;
    users: Team.users;
}
/**
 * Член команды
 */
export declare namespace TeamUser {
    type id = number;
    type avatarUrl = string | null;
}
export interface TeamUser {
    id: TeamUser.id;
    avatarUrl: TeamUser.avatarUrl;
}
/**
 * Информация о пользователе по id
 */
export declare namespace UserInfo {
    type achievementsReceived = Achievement[];
    type avatarUrl = string | null;
    type id = number;
    type profile = Profile | null;
    type rank = Rank | null;
}
export interface UserInfo {
    achievementsReceived: UserInfo.achievementsReceived;
    avatarUrl: UserInfo.avatarUrl;
    id: UserInfo.id;
    profile: UserInfo.profile;
    rank: UserInfo.rank;
}
/**
 * Справочники и прочие данные для анкеты
 */
export declare namespace ProfileMeta {
    type games = Game[];
    type stages = Stage[];
}
export interface ProfileMeta {
    games: ProfileMeta.games;
    stages: ProfileMeta.stages;
}
/**
 * Базовый тип Mutation
 */
export declare namespace Mutation {
    type activateCheck = CheckActivationInfo;
    namespace activateCheck {
        interface Arguments {
            check: string;
        }
    }
    type saveProfile = Profile | null;
    namespace saveProfile {
        interface Arguments {
            profile: ProfileInput;
        }
    }
    type deleteProfile = boolean;
    type registerUser = UserRegistrationInfo;
    namespace registerUser {
        interface Arguments {
            user: UserInput;
        }
    }
    type joinTargetUser = Team;
    namespace joinTargetUser {
        interface Arguments {
            targetUserId: number;
        }
    }
    type leaveTeam = boolean;
    type openPromoCode = UserPromoCode | null;
    namespace openPromoCode {
        interface Arguments {
            promoCodeId: string;
        }
    }
    type getAchievementForPostSharing = AchievementProccingInfo;
    type getAchievementForGroupSubscription = AchievementProccingInfo;
}
export interface Mutation {
    activateCheck: Mutation.activateCheck;
    saveProfile: Mutation.saveProfile;
    deleteProfile: Mutation.deleteProfile;
    registerUser: Mutation.registerUser;
    joinTargetUser: Mutation.joinTargetUser;
    leaveTeam: Mutation.leaveTeam;
    openPromoCode: Mutation.openPromoCode;
    getAchievementForPostSharing: Mutation.getAchievementForPostSharing;
    getAchievementForGroupSubscription: Mutation.getAchievementForGroupSubscription;
}
/**
 * Информация об пройденной активации чека
 */
export declare namespace CheckActivationInfo {
    type message = string;
    type activated = boolean;
    type user = User | null;
    type promoReceived = boolean;
}
export interface CheckActivationInfo {
    message: CheckActivationInfo.message;
    activated: CheckActivationInfo.activated;
    user: CheckActivationInfo.user;
    promoReceived: CheckActivationInfo.promoReceived;
}
/**
 * Информация о пройденной регистрации пользователя
 */
export declare namespace UserRegistrationInfo {
    type user = User;
    type newbiePromoReceived = boolean;
}
export interface UserRegistrationInfo {
    user: UserRegistrationInfo.user;
    newbiePromoReceived: UserRegistrationInfo.newbiePromoReceived;
}
/**
 * Информация о процессе получения пользователем достижения
 */
export declare namespace AchievementProccingInfo {
    type user = User | null;
    type promoReceived = boolean;
}
export interface AchievementProccingInfo {
    user: AchievementProccingInfo.user;
    promoReceived: AchievementProccingInfo.promoReceived;
}
declare const schema: string;
export default schema;
