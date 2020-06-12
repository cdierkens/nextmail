const Renderer = require('../../lib/Renderer');


jest.mock('../../lib/requireTemplate', () => {
  const { Mjml, MjmlHead, MjmlTitle, MjmlBody, MjmlSection, MjmlColumn, MjmlText, MjmlRaw } = require('mjml-react');
  const React = require('react')

  const Template = () => (props) => {
    return (
      <Mjml>
        <MjmlHead>
          <MjmlTitle>Mock Title</MjmlTitle>
        </MjmlHead>
        <MjmlBody width={500}>
          <MjmlSection fullWidth backgroundColor="#efefef">
            <MjmlColumn>
              <MjmlText align="center">
                {`${props.mockText}`}
              </MjmlText>
              
              <MjmlRaw>
                <div>Raw Div</div>
              </MjmlRaw>
            </MjmlColumn>
          </MjmlSection>
        </MjmlBody>
      </Mjml>
    );
  }

  Template.getInitialProps = jest.fn();

  Template.getSubject = jest.fn();

  Template.getHeaders = jest.fn();

  return Template
})

describe('lib/Renderer', () => {
  it('should use process.cwd() for the root directory by default', () => {
    const renderer = new Renderer();

    expect(renderer.rootDirectory).toBe(process.cwd());
  });

  it('should override the default root', () => {
    const renderer = new Renderer({ rootDirectory: 'fake-root-directory' });

    expect(renderer.rootDirectory).toBe('fake-root-directory');
  });

  describe('renderEmail', () => {
    it('should error if the template does not exist', () => {
      const renderer = new Renderer({ rootDirectory: __dirname });

      expect(renderer.renderEmail('module-name')).resolves.toEqual({})
    });
  });
});
