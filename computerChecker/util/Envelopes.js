const securityHeader = `<Header>
                            <wsse:Security
                            xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"
                            mustUnderstand="1">
                                <wsse:UsernameToken>
                                    <wsse:Username>user</wsse:Username>
                                    <wsse:Password>password</wsse:Password>
                                </wsse:UsernameToken>
                            </wsse:Security>
                        </Header>`

module.exports = {
    getAllCourses: function() {
        return`<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">
                    ${securityHeader}
                    <Body>
                        <GetAllCourseDetailsRequest xmlns="http://seanmeedev.com/courses"/>
                    </Body>
                </Envelope>`
    },
    getCourse: function(id){
        return `<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">
                    ${securityHeader}
                    <Body>
                        <GetCourseDetailsRequest xmlns="http://seanmeedev.com/courses">
                            <id>${id}</id>
                        </GetCourseDetailsRequest>
                    </Body>
                </Envelope>`
    },
    insertCourse: function(id, name, description) {
        return `<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">
                    ${securityHeader}
                    <Body>
                        <InsertCourseDetailsRequest xmlns="http://seanmeedev.com/courses">
                            <CourseDetails>
                                <id>${id}</id>
                                <name>${name}</name>
                                <description>${description}</description>
                            </CourseDetails>
                        </InsertCourseDetailsRequest>
                    </Body>
                </Envelope>`
    }
}
