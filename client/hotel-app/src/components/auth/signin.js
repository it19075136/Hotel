import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

class signin extends React.Component {
      
    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        })
      }
      handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
      }
    
      render(){
      return (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div>
          <div className="container center">
          <i class="large material-icons center">lock_outline</i>
          <Typography component="h1" variant="h5" className="center">
          Sign In
        </Typography>
          </div>
        <form onSubmit={this.handleSubmit} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            onChange={this.handleChange}
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={this.handleChange}
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="true" color="primary" />}
            label="Remember me"
            name="remember"
            onChange={this.handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
        </Container>
      );
    }
}

export default signin
