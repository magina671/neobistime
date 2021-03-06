from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.models import AbstractUser
from django.db import IntegrityError, models
from django.utils.translation import ugettext_lazy as _
from easy_thumbnails.fields import ThumbnailerImageField


class CustomUserManager(BaseUserManager):
    """
    Custom user model manager where email is the unique identifiers
    for authentication instead of username.
    """

    def create_user(self, email, password, phone, department_id, name_surname, **extra_fields):
        """
        Create and save a User with the given email and password.
        """
        if not email:
            raise ValueError(_('The Email must be set'))

        if not name_surname:
            raise ValueError(_("First and Last name are required!"))

        if not phone:
            raise ValueError(_("Phone number is required"))

        if not department_id:
            raise IntegrityError("Department is required!")
        email = self.normalize_email(email)

        department = Department.objects.get(pk=department_id)

        user = self.model(email=email, name_surname=name_surname, phone=phone, department_id=department,
                          **extra_fields)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, password, **extra_fields):
        """
        Create and save a SuperUser with the given email and password.
        """
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active', True)

        if not extra_fields.get('is_staff'):
            raise ValueError(_('Superuser must have is_staff=True.'))
        if not extra_fields.get('is_superuser'):
            raise ValueError(_('Superuser must have is_superuser=True.'))
        return self.create_user(email, password, **extra_fields)


class Department(models.Model):
    """
    Department model. Used as a model to group user to specific group depending on their department
    """

    name = models.CharField(max_length=50)

    class Meta:
        verbose_name = 'Департамент'
        verbose_name_plural = 'Департаменты'

    def __str__(self):
        return self.name


class CustomUser(AbstractUser):
    """
    Model for Custom User
    """
    username = None
    profile_img = ThumbnailerImageField(upload_to="profile_imgs/", resize_source=dict(quality=95, size=(600, 600)),
                                        default="profile_imgs/default.jpg")
    email = models.EmailField(_('email address'), unique=True)

    phone = models.CharField(max_length=100, verbose_name="Телефон")
    name_surname = models.CharField(blank=True, max_length=120, verbose_name="Имя")
    department_id = models.ForeignKey(Department, on_delete=models.SET_NULL, related_name='department', null=True,
                                      verbose_name='Департамент')
    points = models.SmallIntegerField(verbose_name='Очки', default=0, null=True, blank=True)
    chat_id = models.CharField(max_length=60, verbose_name='Telegram Чат ID', null=True, blank=True, default='')
    REQUIRED_FIELDS = ["phone", "name_surname", "department_id"]
    USERNAME_FIELD = 'email'

    objects = CustomUserManager()

    class Meta:
        verbose_name = 'Пользователь'
        verbose_name_plural = 'Пользователи'

    def __str__(self):
        return "{}  ".format(self.name_surname)
