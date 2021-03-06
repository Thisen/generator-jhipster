<%#
 Copyright 2013-2017 the original author or authors from the JHipster project.

 This file is part of the JHipster project, see http://www.jhipster.tech/
 for more information.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
-%>
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

import { Audit } from './audit.model';

@Injectable()
export class AuditsService  {
    constructor(private http: HttpClient) { }

    query(req: any): Observable<HttpResponse<Audit[]>> {
        return this.http.get<Audit[]>('<% if (authenticationType === 'uaa') { %><%= uaaBaseName.toLowerCase() %>/<% } %>management/audits', {
            params: new HttpParams()
                .set('fromDate', req.fromDate)
                .set('toDate', req.toDate)
                .set('page', req.page)
                .set('size', req.size)
                .set('sort', req.sort),
            observe: 'response'
        });
    }
}
