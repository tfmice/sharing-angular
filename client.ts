//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v14.0.0.0 (NJsonSchema v11.0.0.0 (Newtonsoft.Json v13.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------

/* tslint:disable */
/* eslint-disable */
// ReSharper disable InconsistentNaming



export class AddEmployeeModel implements IAddEmployeeModel {
    name?: string | undefined;
    hobby?: string | undefined;
    quote?: string | undefined;
    opinion?: string | undefined;
    birthdate?: string | undefined;
    role?: string | undefined;
    teamId?: number;

    constructor(data?: IAddEmployeeModel) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.name = _data["name"];
            this.hobby = _data["hobby"];
            this.quote = _data["quote"];
            this.opinion = _data["opinion"];
            this.birthdate = _data["birthdate"];
            this.role = _data["role"];
            this.teamId = _data["teamId"];
        }
    }

    static fromJS(data: any): AddEmployeeModel {
        data = typeof data === 'object' ? data : {};
        let result = new AddEmployeeModel();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        data["hobby"] = this.hobby;
        data["quote"] = this.quote;
        data["opinion"] = this.opinion;
        data["birthdate"] = this.birthdate;
        data["role"] = this.role;
        data["teamId"] = this.teamId;
        return data;
    }
}

export interface IAddEmployeeModel {
    name?: string | undefined;
    hobby?: string | undefined;
    quote?: string | undefined;
    opinion?: string | undefined;
    birthdate?: string | undefined;
    role?: string | undefined;
    teamId?: number;
}

export class EmployeeViewModel implements IEmployeeViewModel {
    id?: number;
    name?: string | undefined;
    hobby?: string | undefined;
    quote?: string | undefined;
    opinion?: string | undefined;
    birthdate?: string | undefined;
    role?: string | undefined;

    constructor(data?: IEmployeeViewModel) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.name = _data["name"];
            this.hobby = _data["hobby"];
            this.quote = _data["quote"];
            this.opinion = _data["opinion"];
            this.birthdate = _data["birthdate"];
            this.role = _data["role"];
        }
    }

    static fromJS(data: any): EmployeeViewModel {
        data = typeof data === 'object' ? data : {};
        let result = new EmployeeViewModel();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["name"] = this.name;
        data["hobby"] = this.hobby;
        data["quote"] = this.quote;
        data["opinion"] = this.opinion;
        data["birthdate"] = this.birthdate;
        data["role"] = this.role;
        return data;
    }
}

export interface IEmployeeViewModel {
    id?: number;
    name?: string | undefined;
    hobby?: string | undefined;
    quote?: string | undefined;
    opinion?: string | undefined;
    birthdate?: string | undefined;
    role?: string | undefined;
}

export class SectionViewModel implements ISectionViewModel {
    id?: number;
    name?: string | undefined;

    constructor(data?: ISectionViewModel) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.name = _data["name"];
        }
    }

    static fromJS(data: any): SectionViewModel {
        data = typeof data === 'object' ? data : {};
        let result = new SectionViewModel();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["name"] = this.name;
        return data;
    }
}

export interface ISectionViewModel {
    id?: number;
    name?: string | undefined;
}

export class TeamViewModel implements ITeamViewModel {
    id?: number;
    name?: string | undefined;

    constructor(data?: ITeamViewModel) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.name = _data["name"];
        }
    }

    static fromJS(data: any): TeamViewModel {
        data = typeof data === 'object' ? data : {};
        let result = new TeamViewModel();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["name"] = this.name;
        return data;
    }
}

export interface ITeamViewModel {
    id?: number;
    name?: string | undefined;
}

export class UpdateEmployeeModel implements IUpdateEmployeeModel {
    id?: number;
    name?: string | undefined;
    hobby?: string | undefined;
    quote?: string | undefined;
    opinion?: string | undefined;
    birthdate?: string | undefined;
    role?: string | undefined;

    constructor(data?: IUpdateEmployeeModel) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.name = _data["name"];
            this.hobby = _data["hobby"];
            this.quote = _data["quote"];
            this.opinion = _data["opinion"];
            this.birthdate = _data["birthdate"];
            this.role = _data["role"];
        }
    }

    static fromJS(data: any): UpdateEmployeeModel {
        data = typeof data === 'object' ? data : {};
        let result = new UpdateEmployeeModel();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["name"] = this.name;
        data["hobby"] = this.hobby;
        data["quote"] = this.quote;
        data["opinion"] = this.opinion;
        data["birthdate"] = this.birthdate;
        data["role"] = this.role;
        return data;
    }
}

export interface IUpdateEmployeeModel {
    id?: number;
    name?: string | undefined;
    hobby?: string | undefined;
    quote?: string | undefined;
    opinion?: string | undefined;
    birthdate?: string | undefined;
    role?: string | undefined;
}

export class WeatherForecast implements IWeatherForecast {
    date?: string;
    temperatureC?: number;
    readonly temperatureF?: number;
    summary?: string | undefined;

    constructor(data?: IWeatherForecast) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.date = _data["date"];
            this.temperatureC = _data["temperatureC"];
            (<any>this).temperatureF = _data["temperatureF"];
            this.summary = _data["summary"];
        }
    }

    static fromJS(data: any): WeatherForecast {
        data = typeof data === 'object' ? data : {};
        let result = new WeatherForecast();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["date"] = this.date;
        data["temperatureC"] = this.temperatureC;
        data["temperatureF"] = this.temperatureF;
        data["summary"] = this.summary;
        return data;
    }
}

export interface IWeatherForecast {
    date?: string;
    temperatureC?: number;
    temperatureF?: number;
    summary?: string | undefined;
}