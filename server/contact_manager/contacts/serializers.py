from rest_framework import serializers
from .models import Contact, ContactInfo

class ContactInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactInfo
        fields = ['type', 'info']

class ContactSerializer(serializers.ModelSerializer):
    contact_info = ContactInfoSerializer(many=True, required=False)

    class Meta:
        model = Contact
        fields = ['name', 'surname', 'company', 'job_position']

    def create(self, validated_data):
        contact_info_data = validated_data.pop('contact_info', [])  # Extract contact_info data
        contact = Contact.objects.create(**validated_data)  # Create contact
        for info in contact_info_data:
            ContactInfo.objects.create(contact=contact, **info)  # Create associated contact_info
        return contact

    def update(self, instance, validated_data):
        contact_info_data = validated_data.pop('contact_info', [])  # Extract contact_info data
        contact_info_objects = instance.contact_info.all()  # Get existing contact_info instances
        contact_info_ids = [info.id for info in contact_info_objects]

        for info in contact_info_data:
            info_id = info.get('id')
            if info_id in contact_info_ids:
                contact_info = contact_info_objects.get(id=info_id)
                contact_info.type = info.get('type', contact_info.type)
                contact_info.info = info.get('info', contact_info.info)
                contact_info.save()
            else:
                ContactInfo.objects.create(contact=instance, **info)  # Create new contact_info

        # Update contact fields
        instance.name = validated_data.get('name', instance.name)
        instance.surname = validated_data.get('surname', instance.surname)
        instance.company = validated_data.get('company', instance.company)
        instance.job_position = validated_data.get('job_position', instance.job_position)
        instance.address = validated_data.get('address', instance.address)
        instance.city = validated_data.get('city', instance.city)
        instance.zip_code = validated_data.get('zip_code', instance.zip_code)
        instance.country = validated_data.get('country', instance.country)
        instance.save()

        return instance